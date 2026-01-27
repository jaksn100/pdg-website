import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../thinking.module.css';

async function getCaseStudies() {
    return prisma.article.findMany({
        where: {
            category: 'CASE_STUDIES',
            published: true,
        },
        orderBy: { publishedAt: 'desc' },
    });
}

export default async function CaseStudiesPage() {
    const caseStudies = await getCaseStudies();

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
                        <span>Case Studies</span>
                    </div>
                    <h1 className={styles.pageTitle}>Case Studies</h1>
                    <p className={styles.pageSubtitle}>
                        Real-world examples of how PDG delivers results for our clients.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    {caseStudies.length > 0 ? (
                        <div className={styles.articlesGrid}>
                            {caseStudies.map((study) => (
                                <Link href={`/our-thinking/${study.slug}`} key={study.id} className={styles.articleCard}>
                                    <div className={styles.articleImage}>
                                        {study.featureImage ? (
                                            <img src={study.featureImage} alt={study.title} />
                                        ) : (
                                            <span>Case Study Image</span>
                                        )}
                                    </div>
                                    <div className={styles.articleContent}>
                                        <span className={styles.articleCategory}>Case Study</span>
                                        <h3 className={styles.articleTitle}>{study.title}</h3>
                                        <p className={styles.articleExcerpt}>{study.subhead}</p>
                                        {study.tags.length > 0 && (
                                            <div className={styles.articleMeta}>
                                                <span>{study.tags[0]}</span>
                                            </div>
                                        )}
                                    </div>
                                </Link>
                            ))}
                        </div>
                    ) : (
                        <div className={styles.emptyState}>
                            <i className="fa-sharp-duotone fa-solid fa-folder-open"></i>
                            <h3>No case studies yet</h3>
                            <p>We're documenting our client success stories. Check back soon to see how PDG delivers results.</p>
                        </div>
                    )}
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to become our next success story?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help your organization achieve similar results.
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
