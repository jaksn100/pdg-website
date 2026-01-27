import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../careers.module.css';

const openPositions = [
    {
        title: 'Senior GRC Consultant',
        department: 'GRC Practice',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Lead governance, risk, and compliance initiatives for enterprise and government clients.',
    },
    {
        title: 'AWS Cloud Architect',
        department: 'Cloud Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Design and implement cloud infrastructure solutions on AWS for government workloads.',
    },
    {
        title: 'Atlassian Solutions Consultant',
        department: 'Atlassian Practice',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Implement and optimize Jira and Confluence solutions for enterprise clients.',
    },
    {
        title: 'IAM Engineer',
        department: 'Identity Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Build and maintain identity and access management solutions for state agencies.',
    },
    {
        title: 'Senior Systems Analyst',
        department: 'Integration Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Lead requirements gathering and system design for complex integration projects.',
    },
    {
        title: 'DevOps Engineer',
        department: 'Cloud Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
        description: 'Build and maintain CI/CD pipelines and infrastructure automation.',
    },
];

export default function OpeningsPage() {
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
                            <Link href="/careers">Careers</Link>
                            <span>/</span>
                            <span>Current Openings</span>
                        </div>
                        <h1 className={styles.pageTitle}>Current Openings</h1>
                        <p className={styles.pageSubtitle}>
                            Explore opportunities to build your career at PDG.
                        </p>
                    </div>
                </section>

                {/* Positions List */}
                <section className={styles.positionsSection}>
                    <div className="container">
                        <div className={styles.positionsList}>
                            {openPositions.map((position) => (
                                <div key={position.title} className={styles.positionCard}>
                                    <div className={styles.positionInfo}>
                                        <h3 className={styles.positionTitle}>{position.title}</h3>
                                        <p style={{ color: 'var(--color-neutral-600)', marginBottom: 'var(--space-3)' }}>{position.description}</p>
                                        <div className={styles.positionMeta}>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-building"></i>
                                                {position.department}
                                            </span>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                                {position.location}
                                            </span>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-clock"></i>
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link href="/contact" className={styles.applyButton}>
                                        Apply Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Don't see the right role?</h2>
                        <p className={styles.ctaBannerText}>
                            We're always looking for talented professionals. Send us your resume.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
