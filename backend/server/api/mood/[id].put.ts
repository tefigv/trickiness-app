// PUT /api/mood/[id] - Update a mood log
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const updateMoodSchema = z.object({
  score: z.number().int().min(1).max(5).optional(),
  energyLevel: z.number().int().min(1).max(10).optional(),
  tagName: z.string().optional(),
  note: z.string().optional(),
  logTime: z.string().datetime().optional()
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Mood id is required' })

  const body = await readBody(event)
  const data = updateMoodSchema.parse(body)

  const existing = await prisma.moodLog.findFirst({
    where: { id, userId: user.id }
  })
  if (!existing) throw createError({ statusCode: 404, message: 'Mood log not found' })

  const updated = await prisma.moodLog.update({
    where: { id },
    data: {
      ...data,
      logTime: data.logTime ? new Date(data.logTime) : undefined
    }
  })

  return { mood: updated }
})

