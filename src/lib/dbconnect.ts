//connedction se pehle validation dal skte ho!
import { PrismaClient } from "@prisma/client";
type ConnectionObject={
    isConnected?: boolean
}
const connection : ConnectionObject={
    isConnected:false
}
const prisma = new PrismaClient();
// Define an asynchronous function to connect to the database
async function dbConnect():Promise<void>{
    if(connection.isConnected){
        console.log('Already connected to the database');
        return;
    }
    try {
        // Attempt to connect to the PostgreSQL database using Prisma
        await prisma.$connect();
        connection.isConnected=true;
        console.log('Connected to the database');
    } catch (error) {
        console.error('Database connection failed:', error);
        process.exit(1);
    }
}
export { dbConnect, prisma };