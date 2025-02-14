import { FastifyTypedInstance } from '../@types/fastify-typed-instance'
import { createEnqueteController } from '../controllers/enquetesController'
import { createEnqueteSchema } from '../schemas/enquetes-schema'

export async function enquetesRoute(app: FastifyTypedInstance) {
  const prefix = '/polls'

  app.post(
    prefix,
    {
      schema: createEnqueteSchema,
    },
    createEnqueteController,
  )
}
