import Providers from "@/components/layout/Seshprovider";
import { Inter } from "next/font/google";
import "../styles/app.css";
import { Toaster } from "@/components/ui/toaster";
import { SessionProvider, useSession } from "next-auth/react";
import ProviderWrapper from "@/auth/ProviderWrapper";
import ThemeProvider from "@/components/layout/ThemeToggle/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} overflow-hidden`}>
    <ThemeProvider>
        <ProviderWrapper>
          <Toaster />
          {children}
        </ProviderWrapper>
    </ThemeProvider>
      </body>
    </html>
  );
}
