import Header from '@/components/layout/header'
import Sidebar from '@/components/layout/sidebar'
import type { Metadata } from 'next'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'Remco Stoeten - Dashboard',
}

export default function DashboardLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <div className="flex ">
                <Sidebar />
                <main className="md:gap-8 flex-1 ml-7 mt-20">
                    <div className="pb-8">{children}</div>
                </main>
            </div>
        </>
    )
}
