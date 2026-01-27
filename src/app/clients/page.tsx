import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './clients.module.css';

const governmentClients = [
    {
        name: 'Ohio Department of Medicaid',
        abbr: 'ODM',
        description: 'Healthcare systems modernization and integration for Ohio\'s Medicaid programs.',
    },
    {
        name: 'Ohio Department of Aging',
        abbr: 'ODA',
        description: 'Technology solutions supporting services for Ohio\'s aging population.',
    },
    {
        name: 'Ohio Department of Job and Family Services',
        abbr: 'ODJFS',
        description: 'Enterprise systems supporting employment and family assistance programs.',
    },
    {
        name: 'InnovateOhio Platform',
        abbr: 'IOP',
        description: 'Statewide digital transformation initiative modernizing citizen services.',
    },
];

const enterprisePartners = [
    { name: 'Deloitte', type: 'Strategic Partner' },
    { name: 'Accenture', type: 'Strategic Partner' },
    { name: 'Gainwell Technologies', type: 'Healthcare Partner' },
    { name: 'Maximus', type: 'Government Partner' },
    { name: 'G20', type: 'Technology Partner' },
];

const metrics = [
    { value: '16+', label: 'Years of Excellence' },
    { value: '14', label: 'Years Government Service' },
    { value: '50+', label: 'Major Engagements' },
    { value: '100%', label: 'Client Satisfaction' },
];

const testimonials = [
    {
        quote: 'PDG has been an invaluable partner in our digital transformation journey. Their expertise and commitment to our success sets them apart.',
        author: 'Government Agency Director',
        organization: 'Ohio State Agency',
    },
    {
        quote: 'The PDG team brings enterprise-level expertise with the agility and personal attention that makes all the difference on complex projects.',
        author: 'Program Manager',
        organization: 'Enterprise Partner',
    },
    {
        quote: 'Working with PDG is like having an extension of our own team. They truly understand our challenges and deliver solutions that work.',
        author: 'IT Director',
        organization: 'Healthcare Organization',
    },
];

export default function ClientsPage() {
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
                            <span>Clients & Impact</span>
                        </div>
                        <h1 className={styles.pageTitle}>Clients & Impact</h1>
                        <p className={styles.pageSubtitle}>
                            Trusted by government agencies and enterprise partners to deliver
                            technology solutions that make a difference.
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

                {/* Government Clients */}
                <section className={styles.clientsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Government Clients</h2>
                            <p className={styles.sectionSubtitle}>
                                Serving Ohio's citizens through technology partnerships with key state agencies.
                            </p>
                        </div>
                        <div className={styles.governmentGrid}>
                            {governmentClients.map((client) => (
                                <div key={client.abbr} className={styles.governmentCard}>
                                    <div className={styles.clientLogo}>
                                        <span>{client.abbr}</span>
                                    </div>
                                    <h3 className={styles.clientName}>{client.name}</h3>
                                    <p className={styles.clientDescription}>{client.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Enterprise Partners */}
                <section className={styles.partnersSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Enterprise Partners</h2>
                            <p className={styles.sectionSubtitle}>
                                Working alongside leading consultancies to deliver enterprise-scale solutions.
                            </p>
                        </div>
                        <div className={styles.partnersGrid}>
                            {enterprisePartners.map((partner) => (
                                <div key={partner.name} className={styles.partnerCard}>
                                    <span className={styles.partnerName}>{partner.name}</span>
                                    <span className={styles.partnerType}>{partner.type}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Testimonials */}
                <section className={styles.testimonialsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>What Our Partners Say</h2>
                        </div>
                        <div className={styles.testimonialsGrid}>
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className={styles.testimonialCard}>
                                    <div className={styles.quoteIcon}>
                                        <i className="fa-sharp-duotone fa-solid fa-quote-left"></i>
                                    </div>
                                    <p className={styles.testimonialQuote}>{testimonial.quote}</p>
                                    <div className={styles.testimonialAuthor}>
                                        <span className={styles.authorName}>{testimonial.author}</span>
                                        <span className={styles.authorOrg}>{testimonial.organization}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to join our clients?</h2>
                        <p className={styles.ctaBannerText}>
                            Let's discuss how PDG can help your organization achieve its goals.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start a Conversation
                            </Link>
                            <Link href="/our-thinking" className="btn btn-secondary btn-lg">
                                View Case Studies
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
