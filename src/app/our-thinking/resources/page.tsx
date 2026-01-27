import Link from 'next/link';
import styles from '../thinking.module.css';

const resources = [
    {
        title: 'GRC Framework for Government Agencies',
        excerpt: 'A comprehensive guide to building effective governance, risk, and compliance programs in the public sector.',
        type: 'White Paper',
        pages: '24 pages',
    },
    {
        title: 'Building Accessible Digital Services',
        excerpt: 'Ensuring compliance with Section 508 and WCAG 2.1 in government digital products.',
        type: 'White Paper',
        pages: '18 pages',
    },
    {
        title: 'Cloud Security Best Practices',
        excerpt: 'A practical guide to securing AWS and GCP workloads in enterprise environments.',
        type: 'Guide',
        pages: '32 pages',
    },
    {
        title: 'IAM Implementation Checklist',
        excerpt: 'Step-by-step checklist for planning and executing identity management projects.',
        type: 'Checklist',
        pages: '8 pages',
    },
];

export default function ResourcesPage() {
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
                    <div className={styles.articlesGrid}>
                        {resources.map((resource) => (
                            <div key={resource.title} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    <span>{resource.type}</span>
                                </div>
                                <div className={styles.articleContent}>
                                    <span className={styles.articleCategory}>{resource.type}</span>
                                    <h3 className={styles.articleTitle}>{resource.title}</h3>
                                    <p className={styles.articleExcerpt}>{resource.excerpt}</p>
                                    <div className={styles.articleMeta}>
                                        <span>{resource.pages}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
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
