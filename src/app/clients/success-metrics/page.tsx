import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../clients.module.css';

const metrics = [
    { value: '16+', label: 'Years of Excellence', description: 'Delivering technology solutions since 2009' },
    { value: '14', label: 'Years Government Service', description: 'Continuous service to Ohio state agencies' },
    { value: '50+', label: 'Major Engagements', description: 'Successfully completed projects' },
    { value: '100%', label: 'Client Satisfaction', description: 'Based on post-project surveys' },
    { value: '3M+', label: 'Citizens Served', description: 'Through our government solutions' },
    { value: '99.9%', label: 'System Uptime', description: 'For mission-critical applications' },
    { value: '500+', label: 'Integrations Delivered', description: 'Connecting enterprise systems' },
    { value: '12', label: 'State Agencies', description: 'Currently partnering with PDG' },
];

const impactAreas = [
    {
        title: 'Healthcare Transformation',
        description: 'Our work with Ohio\'s Medicaid systems impacts over 3 million residents, ensuring they have access to critical healthcare services.',
        icon: 'fa-sharp-duotone fa-solid fa-heart-pulse',
    },
    {
        title: 'Citizen Services',
        description: 'Digital solutions that make it easier for citizens to access government services, reducing wait times and improving satisfaction.',
        icon: 'fa-sharp-duotone fa-solid fa-users',
    },
    {
        title: 'Operational Efficiency',
        description: 'Our implementations have helped agencies reduce processing times by up to 60% and cut operational costs significantly.',
        icon: 'fa-sharp-duotone fa-solid fa-gauge-high',
    },
    {
        title: 'Security & Compliance',
        description: 'Helping organizations achieve and maintain compliance with FedRAMP, HIPAA, and other critical security frameworks.',
        icon: 'fa-sharp-duotone fa-solid fa-shield-check',
    },
];

export default function SuccessMetricsPage() {
    return (
        <>
            <Header />
            <main>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className={styles.pageHeroPattern}></div>
                    <div className={`container ${styles.pageHeroContent}`}>
                        <div className={styles.pageBreadcrumb}>
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <Link href="/clients">Clients & Impact</Link>
                            <span>/</span>
                            <span>Success Metrics</span>
                        </div>
                        <h1 className={styles.pageTitle}>Success Metrics</h1>
                        <p className={styles.pageSubtitle}>
                            Measurable impact and results from our technology partnerships.
                        </p>
                    </div>
                </section>

                {/* Metrics Section */}
                <section className={styles.metricsSection}>
                    <div className="container">
                        <div className={styles.metricsGrid}>
                            {metrics.map((metric) => (
                                <div key={metric.label} className={styles.metricCard}>
                                    <span className={styles.metricValue}>{metric.value}</span>
                                    <span className={styles.metricLabel}>{metric.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Impact Areas */}
                <section className={styles.clientsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Areas of Impact</h2>
                            <p className={styles.sectionSubtitle}>
                                Where our work makes the biggest difference
                            </p>
                        </div>
                        <div className={styles.governmentGrid}>
                            {impactAreas.map((area) => (
                                <div key={area.title} className={styles.governmentCard}>
                                    <div className={styles.clientLogo}>
                                        <i className={area.icon} style={{ fontSize: '1.5rem', color: 'var(--color-neutral-100)' }}></i>
                                    </div>
                                    <h3 className={styles.clientName}>{area.title}</h3>
                                    <p className={styles.clientDescription}>{area.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to see results like these?</h2>
                        <p className={styles.ctaBannerText}>
                            Let's discuss how PDG can deliver measurable impact for your organization.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start a Conversation
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
