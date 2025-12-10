// DELETE /api/habits/[id] - Soft delete (deactivate) a habit
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Habit id is required' })

  const habit = await prisma.habit.findFirst({
    where: { id, userId: user.id }
  })
  if (!habit) throw createError({ statusCode: 404, message: 'Habit not found' })

  const updated = await prisma.habit.update({
    where: { id },
    data: { isActive: false }
  })

  return { habit: updated }
})

