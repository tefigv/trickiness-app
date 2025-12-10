// POST /api/habits - Create a habit for the current user
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const createHabitSchema = z.object({
  name: z.string().min(1).max(120),
  habitType: z.enum(['STUDY', 'GYM', 'WATER', 'SLEEP', 'OTHER']).default('OTHER'),
  targetGoal: z.number().int().positive().optional(),
  frequencyType: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'CUSTOM']).default('DAILY')
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody(event)
  const data = createHabitSchema.parse(body)

  const habit = await prisma.habit.create({
    data: {
      userId: user.id,
      name: data.name,
      habitType: data.habitType,
      targetGoal: data.targetGoal,
      frequencyType: data.frequencyType
    }
  })

  return { habit }
})

