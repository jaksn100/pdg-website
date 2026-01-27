import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../thinking.module.css';

async function getWhitePapers() {
    return prisma.article.findMany({
        where: {
            category: 'WHITE_PAPERS',
            published: true,
        },
        orderBy: { publishedAt: 'desc' },
    });
}

export default async function ResourcesPage() {
    const resources = await getWhitePapers();

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
                        <span>Resources</span>
                    </div>
                    <h1 className={styles.pageTitle}>White Papers & Resources</h1>
                    <p className={styles.pageSubtitle}>
                        In-depth guides, frameworks, and tools to help your organization succeed.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    {resources.length > 0 ? (
                        <div className={styles.articlesGrid}>
                            {resources.map((resource) => (
                                <Link href={`/our-thinking/${resource.slug}`} key={resource.id} className={styles.articleCard}>
                                    <div className={styles.articleImage}>
                                        {resource.featureImage ? (
                                            <img src={resource.featureImage} alt={resource.title} />
                                        ) : (
                                            <span>White Paper</span>
                                        )}
                                    </div>
                                    <div className={styles.articleContent}>
                                        <span className={styles.articleCategory}>White Paper</span>
                                        <h3 className={styles.articleTitle}>{resource.title}</h3>
                                        <p className={styles.articleExcerpt}>{resource.subhead}</p>
                                        {resource.tags.length > 0 && (
                                            <div className={styles.articleMeta}>
                                                <span>{resource.tags[0]}</span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <i className="fa-sharp-duotone fa-solid fa-file-lines"></i>
                            <h3>No resources yet</h3>
                            <p>We're developing in-depth guides and white papers. Check back soon for valuable resources.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Need a custom solution?</h2>
                    <p className={styles.ctaBannerText}>
                        Contact us to discuss your specific requirements and challenges.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
