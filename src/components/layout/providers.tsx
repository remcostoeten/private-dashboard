'use client';
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { AuthContextProvider, useAuth } from "@/core/providers/auth-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { SESSION_COOKIE_NAME } from "@/core/constants/firebase-config";

export default function Providers({ children }: { children: React.ReactNode }) {
    const user = useAuth();
    const router = useRouter();
    const pathname = usePathname();


    if (user) {
        if (pathname === '/') {
            router.push('/dashboard');
        }
    }

    return (
        <AuthContextProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <TooltipProvider>{children}</TooltipProvider>
            </ThemeProvider>
        </AuthContextProvider>
    );
}