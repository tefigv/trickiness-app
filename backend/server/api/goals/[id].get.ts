// GET /api/goals/[id] - Get a goal
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Goal id is required' })

  const goal = await prisma.goal.findFirst({
    where: { id, userId: user.id }
  })

  if (!goal) throw createError({ statusCode: 404, message: 'Goal not found' })

  return { goal }
})

