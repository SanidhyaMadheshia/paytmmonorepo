// import { withAccelerate } from "@prisma/extension-accelerate";
import { PrismaClient} from "@repo/database/client";


// const prisma = new PrismaClient();


 
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient }
 
export const prisma : PrismaClient = globalForPrisma.prisma || new PrismaClient();


 
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma