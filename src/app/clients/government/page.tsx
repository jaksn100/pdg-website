import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../clients.module.css';

const governmentClients = [
    {
        name: 'Ohio Department of Medicaid',
        abbr: 'ODM',
        description: 'Healthcare systems modernization and integration for Ohio\'s Medicaid programs serving over 3 million residents.',
        services: ['Systems Integration', 'Cloud Development', 'IAM'],
    },
    {
        name: 'Ohio Department of Aging',
        abbr: 'ODA',
        description: 'Technology solutions supporting services for Ohio\'s aging population through modern digital platforms.',
        services: ['CMS', 'Systems Integration'],
    },
    {
        name: 'Ohio Department of Job and Family Services',
        abbr: 'ODJFS',
        description: 'Enterprise systems supporting employment and family assistance programs across the state.',
        services: ['GRC', 'Cloud Development', 'IAM'],
    },
    {
        name: 'InnovateOhio Platform',
        abbr: 'IOP',
        description: 'Statewide digital transformation initiative modernizing citizen services and government operations.',
        services: ['Cloud Development', 'IAM', 'Systems Integration'],
    },
    {
        name: 'Ohio Bureau of Workers\' Compensation',
        abbr: 'BWC',
        description: 'Technology modernization for one of the largest state-run workers\' compensation systems in the nation.',
        services: ['Atlassian', 'GRC', 'Cloud Development'],
    },
];

export default function GovernmentClientsPage() {
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
                            <span>Government Clients</span>
                        </div>
                        <h1 className={styles.pageTitle}>Government Clients</h1>
                        <p className={styles.pageSubtitle}>
                            Trusted by Ohio's leading state agencies to deliver mission-critical technology solutions.
                        </p>
                    </div>
                </section>

                {/* Clients Grid */}
                <section className={styles.clientsSection}>
                    <div className="container">
                        <div className={styles.governmentGrid}>
                            {governmentClients.map((client) => (
                                <div key={client.abbr} className={styles.governmentCard}>
                                    <div className={styles.clientLogo}>
                                        <span>{client.abbr}</span>
                                    </div>
                                    <h3 className={styles.clientName}>{client.name}</h3>
                                    <p className={styles.clientDescription}>{client.description}</p>
                                    <div style={{ marginTop: 'var(--space-4)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                        {client.services.map((service) => (
                                            <span key={service} className="tag tag-primary">{service}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to partner with us?</h2>
                        <p className={styles.ctaBannerText}>
                            See how PDG can help your agency achieve its technology goals.
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
