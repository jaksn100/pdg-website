'use client';

import { useSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useEffect } from 'react';
import styles from './admin.module.css';

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === 'unauthenticated') {
            router.push('/admin/login');
        }
    }, [status, router]);

    if (status === 'loading') {
        return (
            <div className={styles.loginPage}>
                <div className={styles.loginCard}>
                    <div className={styles.loginHeader}>
                        <p>Loading...</p>
                    </div>
                </div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className={styles.adminLayout}>
            <header className={styles.adminHeader}>
                <div className={styles.adminHeaderInner}>
                    <Link href="/admin" className={styles.adminLogo}>
                        <img src="/pdg-logo.svg" alt="PDG" />
                        <span>Admin</span>
                    </Link>

                    <nav className={styles.adminNav}>
                        <Link href="/admin" className={styles.adminNavLink}>
                            <i className="fa-sharp-duotone fa-solid fa-gauge-high"></i>
                            Dashboard
                        </Link>
                        <Link href="/admin/articles" className={styles.adminNavLink}>
                            <i className="fa-sharp-duotone fa-solid fa-newspaper"></i>
                            Articles
                        </Link>
                        <Link href="/admin/testimonials" className={styles.adminNavLink}>
                            <i className="fa-sharp-duotone fa-solid fa-quote-left"></i>
                            Testimonials
                        </Link>
                        <Link href="/admin/jobs" className={styles.adminNavLink}>
                            <i className="fa-sharp-duotone fa-solid fa-briefcase"></i>
                            Job Openings
                        </Link>
                    </nav>

                    <div className={styles.adminUserMenu}>
                        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--color-neutral-600)' }}>
                            {session.user?.email}
                        </span>
                        <button
                            onClick={() => signOut({ callbackUrl: '/admin/login' })}
                            className={styles.logoutButton}
                        >
                            <i className="fa-sharp-duotone fa-solid fa-right-from-bracket"></i>
                            Sign Out
                        </button>
                    </div>
                </div>
            </header>

            <main className={styles.adminContent}>
                {children}
            </main>
        </div>
    );
}
