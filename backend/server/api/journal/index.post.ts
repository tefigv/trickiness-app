// POST /api/journal - Create a journal entry
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const createJournalSchema = z.object({
  entryDate: z.string().datetime().optional(),
  title: z.string().max(200).optional(),
  content: z.string().min(1)
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody(event)
  const data = createJournalSchema.parse(body)

  const entry = await prisma.journalEntry.create({
    data: {
      userId: user.id,
      entryDate: data.entryDate ? new Date(data.entryDate) : new Date(),
      title: data.title,
      content: data.content
    }
  })

  return { entry }
})

