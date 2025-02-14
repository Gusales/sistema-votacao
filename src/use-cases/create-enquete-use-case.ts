import { Enquete } from '@/entities/Enquete'
import { EnqueteRepository } from '@/repositories/enquete-repository'

interface CreateEnqueteUseCaseRequest {
    enqueteTitulo: string
}
interface CreateEnqueteUseCaseResponse {
    enquete: Enquete
}

export class CreateEnqueteUseCase {
    constructor(private enqueteRepository: EnqueteRepository) {}

    async execute(
        data: CreateEnqueteUseCaseRequest,
    ): Promise<CreateEnqueteUseCaseResponse> {
        const enquete = await this.enqueteRepository.create(data.enqueteTitulo)

        return { enquete }
    }
}
