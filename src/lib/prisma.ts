import { PrismaClient } from '@prisma/client/extension'
import { env } from 'env'

export const prisma = new PrismaClient({
  log: env.NODE_ENV === 'DEV' ? ['query', 'info', 'warn', 'error'] : [],
})
