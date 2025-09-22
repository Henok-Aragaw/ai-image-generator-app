'use client'
import { RedirectToSignIn, SignedIn } from '@daveyplate/better-auth-ui'
import { Loader2 } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { authClient } from '~/lib/auth-client'

const Dashboard = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [user, setUser] = useState<{ name?: string; createdAt?: string | Date } | null>(null);

    useEffect(() => {
        const initializeDashboard = async() => {
            try {
                const session = await authClient.getSession();
                if(session?.data?.user){
                    setUser(session.data.user)
                }
            } catch (error) {
               console.error("Dashboard initialization failed:", error); 
            } finally {
                setIsLoading(false);
            }
        }
        void initializeDashboard();
    }, [])

      if (isLoading) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="text-primary h-8 w-8 animate-spin" />
          <p className="text-muted-foreground text-sm">
            Loading your dashboard...
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
     <RedirectToSignIn />
     <SignedIn>
     <h1>welcome {user?.name ? `${user.name}`: ""}</h1>
     </SignedIn>
    </>
  )
}

export default Dashboard