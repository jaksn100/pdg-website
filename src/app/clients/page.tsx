
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

import prisma from '@/lib/prisma';

// ... other constants ...

export default async function ClientsPage() {
    const featuredTestimonials = await prisma.testimonial.findMany({
        where: { featured: true },
        orderBy: { createdAt: 'desc' },
        take: 3,
    });

    return (
        <>
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
                            <Link href="/clients/testimonials" className={styles.sectionLink}>
                                View All Stories <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                        <div className={styles.testimonialsGrid}>
                            {featuredTestimonials.length > 0 ? (
                                featuredTestimonials.map((testimonial) => (
                                    <div key={testimonial.id} className={styles.testimonialCard}>
                                        <div className={styles.quoteIcon}>
                                            <i className="fa-sharp-duotone fa-solid fa-quote-left"></i>
                                        </div>
                                        <div
                                            className={styles.testimonialQuote}
                                            dangerouslySetInnerHTML={{ __html: testimonial.quote }}
                                        />
                                        <div className={styles.testimonialAuthor}>
                                            <span className={styles.authorName}>{testimonial.author}</span>
                                            <span className={styles.authorOrg}>{testimonial.company}</span>
                                            <span className={styles.testimonialTag}>{testimonial.service}</span>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <p className="text-center text-neutral-500 col-span-full">
                                    No featured testimonials yet.
                                </p>
                            )}
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
        </>
    );
}
