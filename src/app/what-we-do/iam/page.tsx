import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-id-card',
        title: 'Identity Governance',
        description: 'Comprehensive identity lifecycle management from provisioning to deprovisioning.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-key',
        title: 'Single Sign-On (SSO)',
        description: 'Streamlined authentication experiences that improve security and user productivity.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-shield-halved',
        title: 'Multi-Factor Authentication',
        description: 'Layered security solutions that protect against unauthorized access without impacting usability.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users-rectangle',
        title: 'Access Management',
        description: 'Role-based access control and fine-grained permissions management across applications.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-link',
        title: 'Federation & Integration',
        description: 'Seamless identity federation across cloud and on-premises environments.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-robot',
        title: 'Privileged Access Management',
        description: 'Secure management and monitoring of privileged accounts and administrative access.',
    },
];

export default function IAMPage() {
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
                        <span>IAM</span>
                    </div>
                    <h1 className={styles.pageTitle}>Identity & Access Management</h1>
                    <p className={styles.pageSubtitle}>
                        Secure, scalable IAM solutions that protect your organization
                        while enabling productivity.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Modern Identity Solutions</h2>
                            <p>
                                Identity is the new security perimeter. As organizations embrace cloud
                                services, remote work, and digital transformation, robust identity and
                                access management becomes critical for protecting sensitive data and
                                maintaining operational efficiency.
                            </p>
                            <p>
                                PDG's IAM practice delivers comprehensive identity solutions that balance
                                security with usability. We help organizations implement modern authentication,
                                streamline access management, and maintain compliance with identity-related
                                regulations.
                            </p>
                            <p>
                                From government agencies to enterprise partners, we've helped organizations
                                secure millions of identities while improving user experience and reducing
                                administrative burden.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>IAM Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our IAM Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            End-to-end identity solutions for modern enterprises.
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
                    <h2 className={styles.ctaBannerTitle}>Ready to secure your identities?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can strengthen your identity and access management.
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
