// GET /api/mood - List mood logs for the current user
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  const logs = await prisma.moodLog.findMany({
    where: { userId: user.id },
    orderBy: { logTime: 'desc' },
    take: 100
  })

  return { moods: logs }
})

