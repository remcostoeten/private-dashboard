'use client';
import { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

type RedirectOptions = {
  sessionUrl: string;
  noSessionUrl: string;
};

const useSessionRedirect = ({
  sessionUrl = '/dashboard',
  noSessionUrl = '/',
}: RedirectOptions) => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const targetUrl = session ? sessionUrl : noSessionUrl;
    router.push(targetUrl);
  }, [session, router, sessionUrl, noSessionUrl]);
};

export default useSessionRedirect;
