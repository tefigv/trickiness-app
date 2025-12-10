// POST /api/goals - Create a goal
import { z } from 'zod'
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

const createGoalSchema = z.object({
  title: z.string().min(1).max(200),
  description: z.string().optional(),
  startDate: z.string().datetime().optional(),
  endDate: z.string().datetime().optional(),
  status: z.enum(['PENDING', 'ACTIVE', 'COMPLETED', 'ARCHIVED']).optional()
})

export default defineEventHandler(async (event) => {
  const user = await requireUser(event)
  const body = await readBody(event)
  const data = createGoalSchema.parse(body)

  const goal = await prisma.goal.create({
    data: {
      userId: user.id,
      title: data.title,
      description: data.description,
      startDate: data.startDate ? new Date(data.startDate) : undefined,
      endDate: data.endDate ? new Date(data.endDate) : undefined,
      status: data.status
    }
  })

  return { goal }
})

