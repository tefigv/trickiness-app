// POST /api/auth/register - Create a new user, hash password, return a JWT
import { z } from 'zod'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import prisma from '~/server/utils/prisma'
import { rateLimit } from '~/server/utils/rateLimit'

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  preferredName: z.string().optional(),
  timezone: z.string().optional()
})

export default defineEventHandler(async (event) => {
  try {
    rateLimit(`auth-register:${getHeader(event, 'x-forwarded-for') ?? getRequestIP(event) ?? 'unknown'}`, 3, 60_000)

    const body = await readBody(event)
    const validated = registerSchema.parse(body)

    const existing = await prisma.user.findUnique({
      where: { email: validated.email }
    })

    if (existing) {
      throw createError({
        statusCode: 409,
        message: 'Email already registered'
      })
    }

    const passwordHash = await bcrypt.hash(validated.password, 10)

    const user = await prisma.user.create({
      data: {
        email: validated.email,
        passwordHash,
        profile: {
          create: {
            preferredName: validated.preferredName,
            timezone: validated.timezone ?? 'UTC'
          }
        }
      },
      select: {
        id: true,
        email: true
      }
    })

    const config = useRuntimeConfig()
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      config.jwtSecret,
      { expiresIn: '7d' }
    )

    return { token, user }
  } catch (error) {
    if (error instanceof z.ZodError) {
      throw createError({
        statusCode: 400,
        message: 'Validation error',
        data: error.errors
      })
    }
    throw error
  }
})

