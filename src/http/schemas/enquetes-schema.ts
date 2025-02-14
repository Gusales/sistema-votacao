import z from 'zod'

// * Zod Schemas

export const createEnqueteBodySchema = z.object({
    tituloEnquete: z.string({
        required_error: 'A enquete precisa de um título!',
    }),
})

const createEnqueteReplySchema = {
    201: z.object({
        idEnquete: z.string().uuid().describe("Enquete criada com sucesso")
    }),
    500: z.object({
        message: z.string().describe("Mensagem de erro interna do servidor")
    })
}

// * Zod Types

export type CreateEnqueteBodyType = z.infer<typeof createEnqueteBodySchema>


// * HTTP Fastify Schemas

export const createEnqueteSchema = {
    tags: ['polls'],
    description: 'Criando uma nova votação',
    body: createEnqueteBodySchema,
    response: createEnqueteReplySchema,
}
