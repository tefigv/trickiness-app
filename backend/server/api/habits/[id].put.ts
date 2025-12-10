// PUT /api/habits/[id] - Update a habit for the current user
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const updateHabitSchema = z.object({
  name: z.string().min(1).max(120).optional(),
  habitType: z.enum(['STUDY', 'GYM', 'WATER', 'SLEEP', 'OTHER']).optional(),
  targetGoal: z.number().int().positive().nullable().optional(),
  frequencyType: z.enum(['DAILY', 'WEEKLY', 'MONTHLY', 'CUSTOM']).optional(),
  isActive: z.boolean().optional()
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Habit id is required' })

  const body = await readBody(event)
  const data = updateHabitSchema.parse(body)

  const habit = await prisma.habit.findFirst({
    where: { id, userId: user.id }
  })
  if (!habit) throw createError({ statusCode: 404, message: 'Habit not found' })

  const updated = await prisma.habit.update({
    where: { id },
    data
  })

  return { habit: updated }
})

