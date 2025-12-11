// GET /api/habits - List habits for the current user
import prisma from '~/server/utils/prisma'
import { requireUser } from '~/server/utils/auth'

export default defineEventHandler(async (event) => {
  // TODO: Re-enable authentication
  // const user = await requireUser(event)
  
  // TEMPORARY: For testing without auth, get first user
  const firstUser = await prisma.user.findFirst();
  if (!firstUser) {
    return { habits: [] };
  }
  const testUserId = firstUser.id;

  const habits = await prisma.habit.findMany({
    where: { userId: testUserId, isActive: true }, // user.id
    orderBy: { createdAt: 'desc' }
  })

  return { habits }
})

