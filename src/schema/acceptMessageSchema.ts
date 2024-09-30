import {z  } from 'zod'

const acceptMessagesSchema=z.object({
    acceptingMessages:z.boolean()
})

export default acceptMessagesSchema
