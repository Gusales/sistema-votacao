import z from 'zod'

// * Zod Schemas

export const createEnqueteBodySchema = z.object({
  nome: z.string({
    required_error: 'Campo de nome não pode estar vazio',
  }),
  numero: z
    .number({ required_error: 'Campo de número não pode estar vazio' })
    .min(1, 'O campo de número precisa ter no mínimo 1'),
})

export type CreateEnqueteBodyType = z.infer<typeof createEnqueteBodySchema>

// * HTTP Fastify Schemas

export const listEnquetesSchema = {
  tags: ['polls'],
  description: 'Listando todas as votações',
  response: {
    200: z.array(z.object({ nome: z.string(), numero: z.number() })),
  },
}

export const createEnqueteSchema = {
  tags: ['polls'],
  description: 'Criando uma nova votação',
  body: createEnqueteBodySchema,
  response: {
    201: z.null().describe('Sua votação foi criada com sucesso!'),
  },
}
