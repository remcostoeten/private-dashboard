"use client";
import { ReactNode } from "react";
import ThemeProvider from "./ThemeToggle/theme-provider";
import SheshProvider from "./SessionLogic";
import { SessionProvider } from "next-auth/react";

export default function Providers({ children }: { children: ReactNode }) {


  return (
   <SessionProvider>
   <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SheshProvider />
    </ThemeProvider>
    </SessionProvider>
  );
}
