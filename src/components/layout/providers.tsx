'use client';
import React from 'react';
import ThemeProvider from './ThemeToggle/theme-provider';
import { SessionProvider, SessionProviderProps } from 'next-auth/react';
import SessionWrapperRedirect from '@/core/providers/SessionRedirectWrapper';

type ProvidersProps = {
  session: SessionProviderProps['session'];
  children: React.ReactNode;
};

const Providers: React.FC<ProvidersProps> = ({ session, children }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <SessionProvider session={session}>
        <SessionWrapperRedirect>{children}</SessionWrapperRedirect>
      </SessionProvider>
    </ThemeProvider>
  );
};

export default Providers;
