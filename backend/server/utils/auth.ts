// Auth utilities: extract/verify JWT and load the current user
import jwt from 'jsonwebtoken'
import prisma from '~/server/utils/prisma'

type JwtPayload = { userId: string; email: string }

export function getBearerToken(event: any): string | null {
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) return null
  return authHeader.substring('bearer '.length)
}

export function verifyToken(token: string, secret: string): JwtPayload | null {
  try {
    return jwt.verify(token, secret) as JwtPayload
  } catch {
    return null
  }
}

export async function requireUser(event: any) {
  const token = getBearerToken(event)
  if (!token) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const config = useRuntimeConfig()
  const payload = verifyToken(token, config.jwtSecret)
  if (!payload) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const user = await prisma.user.findUnique({
    where: { id: payload.userId },
    select: { id: true, email: true }
  })

  if (!user) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  return user
}

