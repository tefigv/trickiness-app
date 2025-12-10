// GET /api/goals - List goals
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  const goals = await prisma.goal.findMany({
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' }
  })

  return { goals }
})

