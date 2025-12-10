// PUT /api/journal/[id] - Update a journal entry
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const updateJournalSchema = z.object({
  entryDate: z.string().datetime().optional(),
  title: z.string().max(200).optional(),
  content: z.string().min(1).optional()
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const id = getRouterParam(event, 'id')
  if (!id) throw createError({ statusCode: 400, message: 'Journal id is required' })

  const body = await readBody(event)
  const data = updateJournalSchema.parse(body)

  const existing = await prisma.journalEntry.findFirst({
    where: { id, userId: user.id }
  })
  if (!existing) throw createError({ statusCode: 404, message: 'Journal entry not found' })

  const updated = await prisma.journalEntry.update({
    where: { id },
    data: {
      ...data,
      entryDate: data.entryDate ? new Date(data.entryDate) : undefined
    }
  })

  return { entry: updated }
})

