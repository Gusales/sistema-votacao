import { EnqueteRepository } from '../enquete-repository'

import { prisma } from '@/lib/prisma'

export class PrismaEnqueteRepository implements EnqueteRepository {
  async create(tituloEnquete: string) {
    const createdEnquete = await prisma.enquetes.create({
      data: {
        tituloEnquete,
      },
    })

    return createdEnquete
  }
  async listAllEnquetes() {
    const enquetes = await prisma.enquetes.findMany()

    return enquetes
  }

  async findById(idEnquete: string) {
    const enquete = await prisma.enquetes.findUnique({
      where: {
        idEnquete,
      },
    })

    return enquete
  }
}
