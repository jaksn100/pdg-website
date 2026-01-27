import Link from 'next/link';
import styles from '../thinking.module.css';

const caseStudies = [
    {
        title: 'Modernizing Ohio\'s State Government IT Infrastructure',
        excerpt: 'How PDG helped transform legacy systems into a modern, scalable architecture serving millions of citizens.',
        client: 'State of Ohio',
        industry: 'Government',
    },
    {
        title: 'Enterprise Atlassian Deployment for Healthcare',
        excerpt: 'Implementing Jira and Confluence across a 5,000-person healthcare organization.',
        client: 'Major Healthcare System',
        industry: 'Healthcare',
    },
    {
        title: 'Identity Management Transformation',
        excerpt: 'Deploying a comprehensive IAM solution for a state agency serving 12 million residents.',
        client: 'State Agency',
        industry: 'Government',
    },
    {
        title: 'Cloud Migration for Government Services',
        excerpt: 'Moving critical citizen services to AWS while maintaining compliance and security.',
        client: 'Government Agency',
        industry: 'Government',
    },
];

export default function CaseStudiesPage() {
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
                    <div className={styles.articlesGrid}>
                        {caseStudies.map((study) => (
                            <div key={study.title} className={styles.articleCard}>
                                <div className={styles.articleImage}>
                                    <span>Case Study Image</span>
                                </div>
                                <div className={styles.articleContent}>
                                    <span className={styles.articleCategory}>{study.industry}</span>
                                    <h3 className={styles.articleTitle}>{study.title}</h3>
                                    <p className={styles.articleExcerpt}>{study.excerpt}</p>
                                    <div className={styles.articleMeta}>
                                        <span>{study.client}</span>
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
