import { FastifyReply, FastifyRequest } from 'fastify'
import { CreateEnqueteBodyType } from '../schemas/enquetes-schema'

export async function createEnqueteController(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const { nome, numero } = request.body as CreateEnqueteBodyType
}
