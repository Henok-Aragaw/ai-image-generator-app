import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { env } from "~/env";

const prisma = new PrismaClient();
export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword:{
        enabled:true,
        minPasswordLength:6,
        autoSignIn:false,
    },
    socialProviders:{
        google:{
            clientId:env.PUBLIC_GOOGLE_CLIENT_ID as string,
            clientSecret:env.PUBLIC_GOOGLE_SECRET_ID as string,
        },
    }
});