import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from './testimonials.module.css';

async function getTestimonials() {
    return prisma.testimonial.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export default async function TestimonialsPage() {
    const testimonials = await getTestimonials();

    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/clients">Clients & Impact</Link>
                        <span>/</span>
                        <span>Testimonials</span>
                    </div>
                    <h1 className={styles.pageTitle}>Client Stories</h1>
                    <p className={styles.pageSubtitle}>
                        Hear directly from our partners about the impact we've created together.
                    </p>
                </div>
            </section>

            {/* Testimonials Grid */}
            <section className={styles.contentSection}>
                <div className="container">
                    {testimonials.length > 0 ? (
                        <div className={styles.grid}>
                            {testimonials.map((t) => (
                                <div key={t.id} className={styles.card}>
                                    <div className={styles.cardContent}>
                                        <div className={styles.quoteIcon}>
                                            <i className="fa-solid fa-quote-left"></i>
                                        </div>
                                        <div
                                            className={styles.quote}
                                            dangerouslySetInnerHTML={{ __html: t.quote }}
                                        />
                                        <div className={styles.meta}>
                                            <div className={styles.author}>{t.author}</div>
                                            <div className={styles.company}>{t.company}</div>
                                        </div>
                                    </div>
                                    <div className={styles.cardFooter}>
                                        <span className={styles.tag}>{t.service}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <i className="fa-sharp-duotone fa-solid fa-comments"></i>
                            <h3>No testimonials yet</h3>
                            <p>Check back soon to hear from our partners.</p>
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
}
