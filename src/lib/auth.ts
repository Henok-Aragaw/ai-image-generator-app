import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";
import { env } from "~/env";
import { Polar } from "@polar-sh/sdk"
import { polar, checkout, portal, webhooks } from "@polar-sh/better-auth";
import { db } from "~/server/db";

const polarClient = new Polar ({
    accessToken: env.POLAR_ACCESS_TOKEN as string,
    server:'sandbox'
})

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
            clientId:env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
            clientSecret:env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET_ID,
        },
    },
    plugins:[
        polar({
           client: polarClient,
           createCustomerOnSignUp: true,
            use:[
                checkout({
                   products: [
                    {
                        productId:"0ebd140-c672-4e73-871a-50d1cd5075bf",
                        slug:"Starter"
                    },
                    {
                        productId:"780068c8-d699-49f3-9b53-7251782b6c65",
                        slug:"Creator"
                    },
                    {
                        productId:"ab55e0fd-e436-49e7-8b9d-cf7109bf3837",
                        slug:"Pro"
                    }
                   ],
                   successUrl:"/dashboard",
                   authenticatedUsersOnly:true,
                }),
                portal(),
                webhooks({
                    secret: env.POLAR_WEBHOOK_SECRET as string,
                    onOrderPaid : async (order) => {
                        const externalCustomerId = order.data.customer.externalId;

                        if(!externalCustomerId){
                            console.error("No External Customer ID found in the order")
                            throw new Error("No external customer id found");
                        }

                        const productId = order.data.productId;

                        if(!productId){
                            console.error("No Product ID found in the order")
                            throw new Error("No product id found");
                        }

                        let creditToAdd = 0;

                        switch(productId) {
                            case "30ebd140-c672-4e73-871a-50d1cd5075bf":
                                creditToAdd = 25;
                                break;
                            case "780068c8-d699-49f3-9b53-7251782b6c65":
                                creditToAdd = 100;
                                break;
                            case "ab55e0fd-e436-49e7-8b9d-cf7109bf3837":
                                creditToAdd = 500;
                                break;
                        }

                        await db.user.update({
                            where: { id: externalCustomerId },
                            data: {
                                credits: {
                                    increment: creditToAdd
                                }
                            }
                        })
                    }
                })
            ]
        })
    ]
});