import { PrismaEnqueteRepository } from '@/repositories/prisma-repository/prisma-enquete-repository'
import { CreateEnqueteUseCase } from '../create-enquete-use-case'

export function makeCreateEnqueteUseCase() {
    const repository = new PrismaEnqueteRepository()
    const useCase = new CreateEnqueteUseCase(repository)

    return useCase
}
