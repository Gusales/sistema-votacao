import { randomUUID } from 'node:crypto'

import { Enquete } from '@/entities/Enquete'
import { EnqueteRepository } from '@/repositories/enquete-repository'

export class InMemoryEnqueteRepository implements EnqueteRepository {
  private enquetes: Enquete[] = []

  async create(tituloEnquete: string) {
    const enquete: Enquete = {
      idEnquete: randomUUID(),
      tituloEnquete,
      criadoEm: new Date(),
      alteradoEm: new Date(),
    }

    this.enquetes.push(enquete)

    return enquete
  }
  async listAllEnquetes() {
    return this.enquetes
  }

  async findById(idEnquete: string) {
    const enquete = this.enquetes.find((item) => item.idEnquete === idEnquete)

    if (enquete) {
      return enquete
    }

    return null
  }
}
