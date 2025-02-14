import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateEnqueteBodyType } from '../schemas/enquetes-schema'
import { makeCreateEnqueteUseCase } from '@/use-cases/factories/make-create-enquete-use-case'

export async function createEnqueteController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { tituloEnquete } = request.body as CreateEnqueteBodyType
    const createEnqueteUseCase = makeCreateEnqueteUseCase()

    const { enquete } = await createEnqueteUseCase.execute({
      enqueteTitulo: tituloEnquete,
    })

    return reply.status(201).send({ idEnquete: enquete.idEnquete })
  } catch (error) {
    if (error) {
      return reply
        .status(500)
        .send({ message: "Ocorreu um erro desconhecido no servidor!" })
    }
  }
}
