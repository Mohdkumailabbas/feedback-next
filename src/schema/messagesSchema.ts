import {z  } from 'zod'

const MessagesSchema=z.object({
    content:z.string().min(10,{message:"Message must be at least 10 char"}).
    max(300,{message:"Message must no longer exceed than 300 characters"})
})

export default MessagesSchema
