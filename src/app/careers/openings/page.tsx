import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../careers.module.css';

async function getOpenings() {
    return prisma.jobOpening.findMany({
        where: {
            published: true,
        },
        orderBy: { publishedAt: 'desc' },
    });
}

export default async function OpeningsPage() {
    const openPositions = await getOpenings();

    return (
        <>
            <Header />
            <main>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className={styles.pageHeroPattern}></div>
                    <div className={`container ${styles.pageHeroContent}`}>
                        <div className={styles.pageBreadcrumb}>
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/careers">Careers</Link>
                            <span>/</span>
                            <span>Current Openings</span>
                        </div>
                        <h1 className={styles.pageTitle}>Current Openings</h1>
                        <p className={styles.pageSubtitle}>
                            Explore opportunities to build your career at PDG.
                        </p>
                    </div>
                </section>

                {/* Positions List */}
                <section className={styles.positionsSection}>
                    <div className="container">
                        {openPositions.length > 0 ? (
                            <div className={styles.positionsList}>
                                {openPositions.map((position) => (
                                    <Link href={`/careers/openings/${position.slug}`} key={position.id} className={styles.positionCard}>
                                        <div className={styles.positionInfo}>
                                            <h3 className={styles.positionTitle}>{position.title}</h3>
                                            <p style={{ color: 'var(--color-neutral-600)', marginBottom: 'var(--space-3)' }}>
                                                {position.description}
                                            </p>
                                            <div className={styles.positionMeta}>
                                                <span>
                                                    <i className="fa-sharp-duotone fa-solid fa-building"></i>
                                                    {position.department}
                                                </span>
                                                <span>
                                                    <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                                    {position.location}
                                                </span>
                                                <span>
                                                    <i className="fa-sharp-duotone fa-solid fa-clock"></i>
                                                    {position.type}
                                                </span>
                                            </div>
                                        </div>
                                        <span className={styles.applyButton}>
                                            View Details
                                        </span>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className={styles.emptyState}>
                                <i className="fa-sharp-duotone fa-solid fa-briefcase"></i>
                                <h3>No current openings</h3>
                                <p>We don't have any open positions at this time. Check back soon or submit your resume for future opportunities.</p>
                            </div>
                        )}
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Don't see the right role?</h2>
                        <p className={styles.ctaBannerText}>
                            We're always looking for talented professionals. Send us your resume.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
