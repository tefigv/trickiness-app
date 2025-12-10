// POST /api/mood - Create a mood log
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const createMoodSchema = z.object({
  score: z.number().int().min(1).max(5),
  energyLevel: z.number().int().min(1).max(10).optional(),
  tagName: z.string().optional(),
  note: z.string().optional(),
  logTime: z.string().datetime().optional()
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody(event)
  const data = createMoodSchema.parse(body)

  const log = await prisma.moodLog.create({
    data: {
      userId: user.id,
      score: data.score,
      energyLevel: data.energyLevel,
      tagName: data.tagName,
      note: data.note,
      logTime: data.logTime ? new Date(data.logTime) : new Date()
    }
  })

  return { mood: log }
})

