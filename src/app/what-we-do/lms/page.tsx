import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-chalkboard-user',
        title: 'LMS Implementation',
        description: 'Full Absorb LMS deployment including configuration, branding, and user setup.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-folder-tree',
        title: 'Content Migration',
        description: 'Seamless migration of existing training content to your new learning platform.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-puzzle-piece',
        title: 'Custom Integration',
        description: 'Integration with HR systems, SSO providers, and other enterprise applications.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-chart-pie',
        title: 'Reporting & Analytics',
        description: 'Custom dashboards and reports to track learning outcomes and compliance.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-layer-group',
        title: 'Course Development',
        description: 'Engaging course content creation and instructional design services.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users-gear',
        title: 'Administration Training',
        description: 'Comprehensive training for your team to manage the LMS effectively.',
    },
];

export default function LMSPage() {
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
                        <span>Learning Management Systems</span>
                    </div>
                    <h1 className={styles.pageTitle}>Learning Management Systems</h1>
                    <p className={styles.pageSubtitle}>
                        Absorb LMS implementation for effective organizational learning.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Empower Learning at Scale</h2>
                            <p>
                                Effective training and development are critical for organizational
                                success. A modern learning management system (LMS) provides the
                                foundation for delivering, tracking, and measuring learning outcomes.
                            </p>
                            <p>
                                PDG partners with Absorb LMS to deliver powerful, intuitive learning
                                experiences for government agencies and enterprise organizations.
                                We handle everything from initial deployment to ongoing optimization.
                            </p>
                            <p>
                                Whether you need compliance training, professional development, or
                                customer education, we'll help you build a learning program that delivers
                                measurable results.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>LMS Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our LMS Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Complete learning management solutions from deployment to optimization.
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
                    <h2 className={styles.ctaBannerTitle}>Ready to transform your training program?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you implement an LMS that drives learning outcomes.
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
