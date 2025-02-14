import { Enquete } from '@/entities/Enquete'

export interface EnqueteRepository {
    create: (tituloEnquete: string) => Promise<Enquete>
    listAllEnquetes: () => Promise<Enquete[]>
    findById: (idEnquete: string) => Promise<Enquete | null>
}
