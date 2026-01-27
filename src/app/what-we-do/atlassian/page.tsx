import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-list-check',
        title: 'Jira Implementation',
        description: 'End-to-end Jira setup and configuration for agile project management and issue tracking.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-book',
        title: 'Confluence Setup',
        description: 'Knowledge management and documentation platforms that keep teams aligned.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-code-branch',
        title: 'Bitbucket Integration',
        description: 'Source code management with seamless Jira integration for development teams.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-diagram-project',
        title: 'Custom Workflows',
        description: 'Tailored workflows and automation rules that match your business processes.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-arrows-rotate',
        title: 'Migration Services',
        description: 'Seamless migration from legacy systems to Atlassian Cloud or Data Center.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-plug',
        title: 'App & Integration',
        description: 'Marketplace app selection and custom integrations with enterprise systems.',
    },
];

export default function AtlassianPage() {
    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/what-we-do">What We Do</Link>
                        <span>/</span>
                        <span>Atlassian Solutions</span>
                    </div>
                    <h1 className={styles.pageTitle}>Atlassian Solutions</h1>
                    <p className={styles.pageSubtitle}>
                        Expert implementation and optimization of Atlassian products
                        for enterprise collaboration.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Transform Team Collaboration</h2>
                            <p>
                                Atlassian's suite of products—Jira, Confluence, and Bitbucket—have
                                become essential tools for modern organizations. But realizing their
                                full potential requires thoughtful implementation and configuration.
                            </p>
                            <p>
                                PDG's Atlassian practice brings deep expertise in deploying these
                                tools at enterprise scale. We've helped government agencies and
                                Fortune 500 companies streamline their workflows, improve collaboration,
                                and accelerate delivery.
                            </p>
                            <p>
                                Whether you're implementing Atlassian for the first time, migrating
                                to the cloud, or optimizing an existing deployment, we have the
                                expertise to ensure success.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>Atlassian Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Atlassian Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Full-service Atlassian consulting from strategy to support.
                        </p>
                    </div>
                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((capability) => (
                            <div key={capability.title} className={styles.capabilityCard}>
                                <div className={styles.capabilityIcon}>
                                    <i className={capability.icon}></i>
                                </div>
                                <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                                <p className={styles.capabilityDescription}>{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to optimize your Atlassian investment?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you get more from your Atlassian tools.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </Link>
                        <Link href="/what-we-do" className="btn btn-secondary btn-lg">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
