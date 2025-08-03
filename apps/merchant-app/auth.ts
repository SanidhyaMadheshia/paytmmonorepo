import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter"
import GitHub from "next-auth/providers/github";
import { prisma } from "./prisma";
import Credentials from "next-auth/providers/credentials";
// import { Prisma } from "@prisma/client";
// import { prisma } from "./prisma";
// import Google from "next-auth/providers/google"

 
export const { handlers, signIn, signOut , auth} = NextAuth({
    // adapter : PrismaAdapter(prisma),
    adapter : PrismaAdapter(prisma),
  providers: [
    GitHub,
    Credentials({
      credentials: {
        email: {
          type: "email",
          label: "Email",
          placeholder: "johndoe@gmail.com",
        },
        password: {
          type: "password",
          label: "Password",
          placeholder: "*****",
        },

      },
      authorize : async (Credentials)=> {
        let user = null
 
        // logic to salt and hash password
        const pwHash = saltAndHashPassword(credentials.password)
 
        // logic to verify if the user exists
        user = await getUserFromDb(credentials.email, pwHash)
 
        if (!user) {
          // No user found, so this is their first attempt to login
          // Optionally, this is also the place you could do a user registration
          throw new Error("Invalid credentials.")
        }
 
        // return user object with their profile data
        return user
      }

    })


  ],
  debug : process.env.NODE_ENV=== "development",
}) ;
