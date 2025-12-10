// GET /api/habits/[id] - Get a habit by id for the current user
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Habit id is required' })

  const habit = await prisma.habit.findFirst({
    where: { id, userId: user.id, isActive: true }
  })

  if (!habit) {
    throw createError({ statusCode: 404, message: 'Habit not found' })
  }

  return { habit }
})

