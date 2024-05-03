"use client";
import React from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import { SessionProviderProps } from "next-auth/react";
import Seshprovider from "./Seshprovider";
export default function Providers({
  session,
  children,
}: {
  session: SessionProviderProps["session"];
  children: React.ReactNode;
}) {
  return (
    <>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Seshprovider session={session}>{children}</Seshprovider>
      </ThemeProvider>
    </>
  );
}
