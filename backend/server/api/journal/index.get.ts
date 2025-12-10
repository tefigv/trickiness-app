// GET /api/journal - List journal entries
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)

  const entries = await prisma.journalEntry.findMany({
    where: { userId: user.id },
    orderBy: { entryDate: 'desc' },
    take: 100
  })

  return { journal: entries }
})

