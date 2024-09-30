import {z  } from 'zod'

const verifySchema=z.string().min(6,"code must be a least of 6 characters")

export default verifySchema