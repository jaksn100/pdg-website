import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-cubes',
        title: 'Contentful Implementation',
        description: 'Full Contentful setup including content modeling, space configuration, and API setup.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-sitemap',
        title: 'Content Modeling',
        description: 'Strategic content type design that supports your editorial workflow and channels.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-code',
        title: 'API Integration',
        description: 'Seamless integration with frontend frameworks, mobile apps, and third-party services.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-layer-group',
        title: 'Multi-channel Publishing',
        description: 'Content delivery across web, mobile, digital signage, and emerging platforms.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-arrows-rotate',
        title: 'Migration Services',
        description: 'Content migration from legacy CMS platforms with minimal disruption.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users-cog',
        title: 'Editor Training',
        description: 'Comprehensive training for content teams on headless CMS workflows.',
    },
];

export default function CMSPage() {
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
                        <span>Content Management Systems</span>
                    </div>
                    <h1 className={styles.pageTitle}>Content Management Systems</h1>
                    <p className={styles.pageSubtitle}>
                        Headless CMS solutions for flexible, scalable content management.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Content Without Boundaries</h2>
                            <p>
                                Traditional CMS platforms tie your content to a single presentation
                                layer. Headless CMS architecture liberates your content, enabling
                                delivery across any channel—web, mobile, IoT, and beyond.
                            </p>
                            <p>
                                PDG specializes in Contentful, the leading headless CMS platform.
                                We help organizations build flexible content infrastructure that
                                scales with their needs and empowers content teams.
                            </p>
                            <p>
                                From initial implementation to complex multi-channel deployments,
                                we deliver CMS solutions that put content creators in control while
                                giving developers the flexibility they need.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>CMS Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our CMS Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            End-to-end headless CMS services for modern content operations.
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
                    <h2 className={styles.ctaBannerTitle}>Ready to modernize your content strategy?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you implement a headless CMS that scales.
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
