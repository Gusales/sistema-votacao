import fastify from 'fastify'
import fastifyCors from '@fastify/cors'
import { fastifySwagger } from '@fastify/swagger'
import { fastifySwaggerUi } from '@fastify/swagger-ui'
import {
  jsonSchemaTransform,
  serializerCompiler,
  validatorCompiler,
  ZodTypeProvider,
} from 'fastify-type-provider-zod'

import { env } from './env'
import { enquetesRoute } from './http/routes/enquetes-routes'

export const app = fastify({
  logger: env.NODE_ENV === 'DEV',
}).withTypeProvider<ZodTypeProvider>()

app.register(fastifyCors, {
  origin: env.NODE_ENV === 'DEV' ? '*' : [''],
})

app.setValidatorCompiler(validatorCompiler)
app.setSerializerCompiler(serializerCompiler)

app.register(fastifySwagger, {
  openapi: {
    info: {
      title: 'Sistema de Votação em Tempo Real',
      version: '1.0.0',
    },
  },
  transform: jsonSchemaTransform,
})

app.register(enquetesRoute)

app.register(require('@scalar/fastify-api-reference'), {
  routePrefix: '/docs/scalar',
})

app.register(fastifySwaggerUi, {
  routePrefix: '/docs/swagger',
})
