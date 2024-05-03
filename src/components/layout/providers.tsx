"use client";
import React, { ReactNode, useEffect } from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProvider, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import SheshProvider from "./sessionprovider";

export default function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  const pathname = usePathname();
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "loading") return; // Do nothing while loading
    if (!session && pathname !== "/") {
      router.push("/"); // If not session, redirect to login
    } else if (session && pathname === "/") {
      router.push("/dashboard"); // If session, redirect to dashboard
    }
  }, [session, router, status]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SheshProvider />
    </ThemeProvider>
  );
}
