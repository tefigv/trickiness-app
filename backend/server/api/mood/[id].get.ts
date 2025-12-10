// GET /api/mood/[id] - Get a mood log
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Mood id is required' })

  const log = await prisma.moodLog.findFirst({
    where: { id, userId: user.id }
  })

  if (!log) throw createError({ statusCode: 404, message: 'Mood log not found' })

  return { mood: log }
})

