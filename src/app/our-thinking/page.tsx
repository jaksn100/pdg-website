import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from './thinking.module.css';
import ThinkingGrid from './ThinkingGrid';

async function getAllArticles() {
    return prisma.article.findMany({
        where: {
            published: true,
        },
        orderBy: { publishedAt: 'desc' },
    });
}

export default async function OurThinkingPage() {
    const articles = await getAllArticles();

    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>Our Thinking</span>
                    </div>
                    <h1 className={styles.pageTitle}>Our Thinking</h1>
                    <p className={styles.pageSubtitle}>
                        Insights, case studies, and perspectives on technology trends
                        shaping government and enterprise.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <ThinkingGrid articles={articles} />
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to discuss your challenges?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's explore how PDG's expertise can help your organization succeed.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
