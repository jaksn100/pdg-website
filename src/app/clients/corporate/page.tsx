import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../clients.module.css';

const corporateClients = [
    {
        name: 'Deloitte',
        type: 'Strategic Partner',
        description: 'Delivering specialized technology expertise as a trusted subcontractor on large-scale government engagements.',
    },
    {
        name: 'Accenture',
        type: 'Strategic Partner',
        description: 'Providing subject matter expertise and implementation support for enterprise digital transformation initiatives.',
    },
    {
        name: 'Gainwell Technologies',
        type: 'Healthcare Partner',
        description: 'Partnering to deliver healthcare technology solutions for state Medicaid and health services programs.',
    },
    {
        name: 'Maximus',
        type: 'Government Partner',
        description: 'Collaborating on government services technology including citizen engagement and case management systems.',
    },
    {
        name: 'G20',
        type: 'Technology Partner',
        description: 'Joint delivery of advanced technology solutions for public and private sector clients.',
    },
];

export default function CorporateClientsPage() {
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
                            <span>Corporate Clients</span>
                        </div>
                        <h1 className={styles.pageTitle}>Corporate & Enterprise Partners</h1>
                        <p className={styles.pageSubtitle}>
                            Working alongside the world's leading consultancies to deliver enterprise-scale solutions.
                        </p>
                    </div>
                </section>

                {/* Partners Grid */}
                <section className={styles.partnersSection}>
                    <div className="container">
                        <div className={styles.governmentGrid}>
                            {corporateClients.map((client) => (
                                <div key={client.name} className={styles.governmentCard}>
                                    <div className={styles.clientLogo}>
                                        <span>{client.name.substring(0, 2).toUpperCase()}</span>
                                    </div>
                                    <h3 className={styles.clientName}>{client.name}</h3>
                                    <span className="tag tag-primary" style={{ marginBottom: 'var(--space-3)' }}>{client.type}</span>
                                    <p className={styles.clientDescription}>{client.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Interested in partnering with PDG?</h2>
                        <p className={styles.ctaBannerText}>
                            We're always looking for strategic partnerships that create value for our clients.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Explore Partnership
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
