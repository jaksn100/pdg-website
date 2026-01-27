'use client';

import { SessionProvider } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import AdminLayout from './AdminLayout';

export default function AdminRootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isLoginPage = pathname === '/admin/login';

    return (
        <SessionProvider>
            {isLoginPage ? children : <AdminLayout>{children}</AdminLayout>}
        </SessionProvider>
    );
}
