import { InMemoryEnqueteRepository } from '@/repositories/in-memory-repository/in-memory-enquete-repository'
import { beforeEach, describe, expect, it } from 'vitest'
import { CreateEnqueteUseCase } from '../create-enquete-use-case'

describe('Create Enquete Use Case', () => {
    let repository: InMemoryEnqueteRepository
    let sut: CreateEnqueteUseCase
    beforeEach(() => {
        repository = new InMemoryEnqueteRepository()
        sut = new CreateEnqueteUseCase(repository)
    })

    it('É possível criar uma enquete com um título', async () => {
        const { enquete } = await sut.execute({ enqueteTitulo: 'Enquete 1' })

        expect(enquete.idEnquete).toEqual(expect.any(String))
    })
})
