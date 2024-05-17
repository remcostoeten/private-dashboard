"use client";
import React, { ReactNode } from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { AuthContextProvider } from "@/core/providers/auth-provider";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

if (typeof window !== 'undefined') {
  posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
    api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  })
}

type ProvidersProps = {
  children?: ReactNode;
};

export default function Providers({ children }: ProvidersProps) {
  return (
    <AuthContextProvider>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <PostHogProvider client={posthog}>
          <TooltipProvider>{children}</TooltipProvider>
        </PostHogProvider>
      </ThemeProvider>
    </AuthContextProvider>
  );
}