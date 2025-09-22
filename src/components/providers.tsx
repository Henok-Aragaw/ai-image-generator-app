"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import type { ReactNode } from "react";

import { authClient } from "~/lib/auth-client";


const protectedPrefixes = ["/dashboard"];

const authRoutes = ["/auth/sign-in", "/auth/sign-up"];

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  const enforceRouteProtection = async () => {
    try {
      const session = await authClient.getSession();
      const currentPath = window.location.pathname;
      const isLoggedIn = !!session.data?.user;

      const isOnProtectedRoute = protectedPrefixes.some((prefix) =>
        currentPath.startsWith(prefix)
      );

      if (!isLoggedIn && isOnProtectedRoute) {
        router.replace("/auth/sign-in");
        return;
      }

      if (isLoggedIn && authRoutes.some((route) => currentPath.startsWith(route))) {
        router.replace("/dashboard");
        return;
      }
    } catch (error) {
      console.error("session check failed", error);
    }
  };
 
  useEffect(() => {
    void enforceRouteProtection();
  }, []);

  return (
    <AuthUIProvider
      authClient={authClient}
      social={{ providers: ["google"] }}
      navigate={(...args) => router.push(...args)}
      replace={(...args) => router.replace(...args)}
      onSessionChange={enforceRouteProtection}
      Link={Link}
      redirectTo="/dashboard"
    >
      {children}
    </AuthUIProvider>
  );
}
