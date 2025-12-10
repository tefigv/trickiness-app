// GET /api/auth/me - Validate JWT and return the current user profile
import jwt from 'jsonwebtoken'
import prisma from '~/server/utils/prisma'

export default defineEventHandler(async (event) => {
  const authHeader = getHeader(event, 'authorization')
  if (!authHeader || !authHeader.toLowerCase().startsWith('bearer ')) {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }

  const token = authHeader.substring('bearer '.length)
  const config = useRuntimeConfig()

  try {
    const payload = jwt.verify(token, config.jwtSecret) as { userId: string; email: string }
    const user = await prisma.user.findUnique({
      where: { id: payload.userId },
      select: {
        id: true,
        email: true,
        profile: {
          select: {
            preferredName: true,
            timezone: true
          }
        }
      }
    })

    if (!user) {
      throw createError({ statusCode: 401, message: 'Unauthorized' })
    }

    return { user }
  } catch {
    throw createError({ statusCode: 401, message: 'Unauthorized' })
  }
})

