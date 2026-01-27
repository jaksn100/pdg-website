import Link from 'next/link';
import styles from './thinking.module.css';

const insights = [
    {
        category: 'Case Study',
        title: 'Modernizing Ohio\'s State Government IT Infrastructure',
        excerpt: 'How PDG helped transform legacy systems into a modern, scalable architecture serving millions of citizens.',
        date: 'January 2025',
        readTime: '8 min read',
        href: '/our-thinking/case-studies/ohio-it-modernization',
    },
    {
        category: 'Insights',
        title: 'The Future of Identity & Access Management in Government',
        excerpt: 'Emerging trends and best practices for implementing robust IAM solutions in public sector environments.',
        date: 'December 2024',
        readTime: '6 min read',
        href: '/our-thinking/insights/future-of-iam',
    },
    {
        category: 'White Paper',
        title: 'GRC Framework for Government Agencies',
        excerpt: 'A comprehensive guide to building effective governance, risk, and compliance programs in the public sector.',
        date: 'November 2024',
        readTime: '12 min read',
        href: '/our-thinking/resources/grc-framework-guide',
    },
    {
        category: 'Case Study',
        title: 'Enterprise Atlassian Deployment for Healthcare',
        excerpt: 'Implementing Jira and Confluence across a 5,000-person healthcare organization.',
        date: 'October 2024',
        readTime: '7 min read',
        href: '/our-thinking/case-studies/healthcare-atlassian',
    },
    {
        category: 'Insights',
        title: 'Cloud Migration Best Practices for Government',
        excerpt: 'Key considerations and strategies for moving government workloads to AWS and GCP.',
        date: 'September 2024',
        readTime: '10 min read',
        href: '/our-thinking/insights/cloud-migration-government',
    },
    {
        category: 'White Paper',
        title: 'Building Accessible Digital Services',
        excerpt: 'Ensuring compliance with Section 508 and WCAG 2.1 in government digital products.',
        date: 'August 2024',
        readTime: '15 min read',
        href: '/our-thinking/resources/accessibility-guide',
    },
];

const categories = ['All', 'Case Studies', 'Insights', 'White Papers'];

export default function OurThinkingPage() {
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
                <div className="container">
                    {/* Category Filter */}
                    <div className={styles.categoryFilter}>
                        {categories.map((category, index) => (
                            <button
                                key={category}
                                className={`${styles.categoryButton} ${index === 0 ? styles.active : ''}`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    <div className={styles.articlesGrid}>
                        {insights.map((article) => (
                            <Link key={article.title} href={article.href} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    <span>Article Image</span>
                                </div>
                                <div className={styles.articleContent}>
                                    <span className={styles.articleCategory}>{article.category}</span>
                                    <h3 className={styles.articleTitle}>{article.title}</h3>
                                    <p className={styles.articleExcerpt}>{article.excerpt}</p>
                                    <div className={styles.articleMeta}>
                                        <span>{article.date}</span>
                                        <span>•</span>
                                        <span>{article.readTime}</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
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
