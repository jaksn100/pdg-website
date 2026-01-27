import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-chart-line',
        title: 'Risk Assessment & Analysis',
        description: 'Comprehensive evaluation of organizational risks including cybersecurity, operational, and compliance risks.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-file-shield',
        title: 'Compliance Frameworks',
        description: 'Implementation and management of compliance frameworks including NIST, ISO 27001, SOC 2, and industry-specific standards.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-scroll',
        title: 'Policy Development',
        description: 'Creation and maintenance of security policies, procedures, and standards aligned with regulatory requirements.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-clipboard-check',
        title: 'Audit Preparation & Support',
        description: 'Expert guidance through audit processes, evidence collection, and remediation planning.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users-gear',
        title: 'GRC Tool Implementation',
        description: 'Selection and deployment of GRC platforms to automate compliance workflows and risk management.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'Training & Awareness',
        description: 'Security awareness programs and specialized training for compliance and risk management teams.',
    },
];

export default function GRCPage() {
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
                        <span>GRC</span>
                    </div>
                    <h1 className={styles.pageTitle}>Governance, Risk & Compliance</h1>
                    <p className={styles.pageSubtitle}>
                        Navigate regulatory complexity with confidence. Our GRC solutions help
                        organizations manage risk and maintain compliance effectively.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Strategic GRC Solutions</h2>
                            <p>
                                In today's complex regulatory environment, effective governance, risk
                                management, and compliance are not optional—they're essential for
                                organizational success and sustainability.
                            </p>
                            <p>
                                PDG's GRC practice brings together deep regulatory expertise with
                                practical implementation experience. We help government agencies and
                                enterprise organizations build robust GRC programs that protect assets,
                                ensure compliance, and enable confident decision-making.
                            </p>
                            <p>
                                Our approach goes beyond checkbox compliance. We help you understand
                                your risk landscape, prioritize your efforts, and build sustainable
                                programs that evolve with changing requirements.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>GRC Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our GRC Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Comprehensive services to build, manage, and optimize your GRC program.
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
                    <h2 className={styles.ctaBannerTitle}>Ready to strengthen your GRC program?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you navigate compliance and manage risk effectively.
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
