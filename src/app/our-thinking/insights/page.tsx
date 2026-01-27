import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../thinking.module.css';

async function getInsights() {
    return prisma.article.findMany({
        where: {
            category: 'INSIGHTS',
            published: true,
        },
        orderBy: { publishedAt: 'desc' },
    });
}

function formatDate(date: Date | null): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format(new Date(date));
}

export default async function InsightsPage() {
    const insights = await getInsights();

    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/our-thinking">Our Thinking</Link>
                        <span>/</span>
                        <span>Insights</span>
                    </div>
                    <h1 className={styles.pageTitle}>Insights & Thought Leadership</h1>
                    <p className={styles.pageSubtitle}>
                        Expert perspectives on technology trends shaping government and enterprise.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    {insights.length > 0 ? (
                        <div className={styles.articlesGrid}>
                            {insights.map((article) => (
                                <Link href={`/our-thinking/${article.slug}`} key={article.id} className={styles.articleCard}>
                                    <div className={styles.articleImage}>
                                        {article.featureImage ? (
                                            <img src={article.featureImage} alt={article.title} />
                                        ) : (
                                            <span>Article Image</span>
                                        )}
                                    </div>
                                    <div className={styles.articleContent}>
                                        <span className={styles.articleCategory}>Insight</span>
                                        <h3 className={styles.articleTitle}>{article.title}</h3>
                                        <p className={styles.articleExcerpt}>{article.subhead}</p>
                                        <div className={styles.articleMeta}>
                                            <span>{formatDate(article.publishedAt)}</span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <i className="fa-sharp-duotone fa-solid fa-lightbulb"></i>
                            <h3>No insights yet</h3>
                            <p>We're working on new thought leadership content. Check back soon for expert perspectives on technology trends.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Have questions about these topics?</h2>
                    <p className={styles.ctaBannerText}>
                        Our experts are ready to discuss how these insights apply to your organization.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
