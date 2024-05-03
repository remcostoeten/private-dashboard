"use client";
import Providers from "@/components/layout/Seshprovider";
import { SessionProvider, useSession } from "next-auth/react";

export default function ProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const { data: session } = useSession();

  return (
      <Providers session={session}>{children}</Providers>
  );
}
