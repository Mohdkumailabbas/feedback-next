
import {z}from "zod";

const usernameSchema = z
   .string()
   .min(2,"Username should be at least 2 characters")
   .max(20,"Username should be at most 20 characters") 
const signUpSchema =z.object({
    username : usernameSchema,
    password:z.string()
      .min(6,{message:"Password should be at least 6 characters"})
      .max(20,{message :"Password should be at most 20 characters"}),
    email:z.string().email()
})
export default signUpSchema