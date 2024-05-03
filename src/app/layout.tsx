import { Toaster } from "sonner";
import "@uploadthing/react/styles.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/app.css";
import SessionDebugger from "@/core/helpers/session-debugger";
import Providers from "@/components/layout/providers";
import { useSession } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next Shadcn",
  description: "Basic dashboard with Next.js and Shadcn",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
        <SessionDebugger />
        <Providers>
          <Toaster invert closeButton />
          {children}
        </Providers>
      </body>
    </html>
  );
}
