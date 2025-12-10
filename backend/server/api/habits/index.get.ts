// GET /api/habits - List habits for the current user
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  const habits = await prisma.habit.findMany({
    where: { userId: user.id, isActive: true },
    orderBy: { createdAt: 'desc' }
  })

  return { habits }
})

