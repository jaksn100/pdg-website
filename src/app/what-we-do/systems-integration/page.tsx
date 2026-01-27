import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-code',
        title: 'API Development',
        description: 'RESTful and GraphQL API design and development for seamless system connectivity.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-microchip',
        title: 'Legacy Modernization',
        description: 'Strategic migration from legacy systems to modern architectures without disruption.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-database',
        title: 'Data Integration',
        description: 'ETL pipelines, data warehousing, and real-time data synchronization solutions.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-robot',
        title: 'Process Automation',
        description: 'Workflow automation and RPA solutions that eliminate manual processes.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-plug',
        title: 'Enterprise Integration',
        description: 'Connecting disparate systems including ERP, CRM, and custom applications.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-mobile-screen',
        title: 'Mobile Development',
        description: 'Native and cross-platform mobile applications for iOS and Android.',
    },
];

const legacyServices = [
    'Feasibility Analysis',
    'Problem Analysis',
    'Data & Process Modeling',
    'Requirements Modeling',
    'Scope Development',
    'Use Case Development',
    'Prototyping',
    'UI/UX Design',
    'Responsive Design',
    'Social Media Integration',
    'Client-Side Scripting',
    'Enterprise Database Development',
    'N-Tier Architecture',
    'SaaS Development',
    'Web API Development',
    'Web Services Development',
];

export default function SystemsIntegrationPage() {
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
                        <span>Systems Integration</span>
                    </div>
                    <h1 className={styles.pageTitle}>Systems Integration & Solutions Development</h1>
                    <p className={styles.pageSubtitle}>
                        Connecting systems, modernizing legacy platforms, and building
                        custom solutions.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Connect Everything</h2>
                            <p>
                                Modern organizations run on interconnected systems. But achieving
                                true integration—where data flows seamlessly and processes work in
                                harmony—requires deep technical expertise and careful planning.
                            </p>
                            <p>
                                PDG's Systems Integration practice brings together decades of
                                experience in enterprise architecture, API development, and legacy
                                modernization. We help organizations break down silos, automate
                                workflows, and build the connected infrastructure that enables
                                digital transformation.
                            </p>
                            <p>
                                From consulting and analysis through development and deployment,
                                we're your partner for end-to-end solutions development.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>Systems Integration Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Integration Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Full-spectrum integration and development services.
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

            {/* Full Services List */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Complete Service Offerings</h2>
                        <p className={styles.sectionSubtitle}>
                            Our full range of consulting, design, and development capabilities.
                        </p>
                    </div>
                    <div className={styles.servicesTagGrid}>
                        {legacyServices.map((service) => (
                            <span key={service} className={styles.serviceTag}>
                                <i className="fa-sharp-duotone fa-solid fa-check"></i>
                                {service}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to connect your systems?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you build an integrated technology ecosystem.
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
