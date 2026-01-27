import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../clients.module.css';

const testimonials = [
    {
        quote: 'PDG has been an invaluable partner in our digital transformation journey. Their expertise and commitment to our success sets them apart from other vendors.',
        author: 'Director of Technology',
        organization: 'Ohio State Agency',
        project: 'Enterprise IT Modernization',
    },
    {
        quote: 'The PDG team brings enterprise-level expertise with the agility and personal attention that makes all the difference on complex projects.',
        author: 'Program Manager',
        organization: 'Enterprise Partner',
        project: 'Systems Integration',
    },
    {
        quote: 'Working with PDG is like having an extension of our own team. They truly understand our challenges and deliver solutions that work.',
        author: 'IT Director',
        organization: 'Healthcare Organization',
        project: 'Cloud Migration',
    },
    {
        quote: 'PDG\'s deep understanding of government technology requirements and their ability to deliver on time and within budget has made them our preferred partner.',
        author: 'CIO',
        organization: 'State Department',
        project: 'IAM Implementation',
    },
    {
        quote: 'The level of expertise PDG brings to GRC initiatives is exceptional. They helped us achieve compliance while actually improving our operations.',
        author: 'Compliance Director',
        organization: 'Government Agency',
        project: 'GRC Framework',
    },
    {
        quote: 'From strategy to implementation, PDG delivered exactly what we needed. Their Atlassian expertise transformed how our teams collaborate.',
        author: 'Operations Manager',
        organization: 'Enterprise Client',
        project: 'Atlassian Deployment',
    },
];

export default function TestimonialsPage() {
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
                            <span>Testimonials</span>
                        </div>
                        <h1 className={styles.pageTitle}>Client Testimonials</h1>
                        <p className={styles.pageSubtitle}>
                            Hear what our clients and partners say about working with PDG.
                        </p>
                    </div>
                </section>

                {/* Testimonials Grid */}
                <section className={styles.testimonialsSection}>
                    <div className="container">
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
                                        <span className="tag tag-primary" style={{ marginTop: 'var(--space-2)', fontSize: 'var(--text-xs)' }}>{testimonial.project}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to become our next success story?</h2>
                        <p className={styles.ctaBannerText}>
                            Join the organizations that trust PDG to deliver results.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Start Your Journey
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
