import { MessageSchema } from "@prisma/client";

export interface ApiResponse{
success:boolean;
message:string;
isAcceptingMessages?:boolean;
messages?:Array<MessageSchema>
}