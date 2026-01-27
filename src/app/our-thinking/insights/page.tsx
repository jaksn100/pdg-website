import Link from 'next/link';
import styles from '../thinking.module.css';

const insights = [
    {
        title: 'The Future of Identity & Access Management in Government',
        excerpt: 'Emerging trends and best practices for implementing robust IAM solutions in public sector environments.',
        date: 'December 2024',
        readTime: '6 min read',
    },
    {
        title: 'Cloud Migration Best Practices for Government',
        excerpt: 'Key considerations and strategies for moving government workloads to AWS and GCP.',
        date: 'September 2024',
        readTime: '10 min read',
    },
    {
        title: 'Zero Trust Architecture: A Practical Guide',
        excerpt: 'Implementing zero trust security models in enterprise and government environments.',
        date: 'August 2024',
        readTime: '8 min read',
    },
    {
        title: 'Digital Transformation in the Public Sector',
        excerpt: 'How government agencies are modernizing citizen services through technology.',
        date: 'July 2024',
        readTime: '7 min read',
    },
];

export default function InsightsPage() {
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
                    <div className={styles.articlesGrid}>
                        {insights.map((article) => (
                            <div key={article.title} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    <span>Article Image</span>
                                </div>
                                <div className={styles.articleContent}>
                                    <span className={styles.articleCategory}>Insight</span>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                    <div className={styles.articleMeta}>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
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
