// DELETE /api/journal/[id] - Delete a journal entry
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Journal id is required' })

  const existing = await prisma.journalEntry.findFirst({
    where: { id, userId: user.id }
  })
  if (!existing) throw createError({ statusCode: 404, message: 'Journal entry not found' })

  await prisma.journalEntry.delete({ where: { id } })

  return { success: true }
})

