import Link from 'next/link';
import styles from './history.module.css';

const timeline = [
    {
        year: '2009',
        title: 'PDG Founded',
        description: 'Perspective Design Group established with a vision to bring enterprise-grade IT consulting to organizations seeking a more personal, agile partner.',
    },
    {
        year: '2011',
        title: 'First Government Engagement',
        description: 'Secured our first major government contract, beginning what would become nearly 14 years of dedicated public sector service.',
    },
    {
        year: '2014',
        title: 'Partnership with Major Consultancies',
        description: 'Established strategic partnerships with Deloitte and Accenture, expanding our reach and capabilities.',
    },
    {
        year: '2016',
        title: 'Ohio State Agency Partnerships',
        description: 'Began deep engagement with Ohio Department of Medicaid and other key state agencies.',
    },
    {
        year: '2018',
        title: 'InnovateOhio Platform',
        description: 'Key contributor to the InnovateOhio Platform, helping modernize state government technology infrastructure.',
    },
    {
        year: '2020',
        title: 'Expanded Service Offerings',
        description: 'Launched specialized practices in Cloud Development, IAM, and GRC to meet evolving client needs.',
    },
    {
        year: '2023',
        title: 'Gainwell Technologies Partnership',
        description: 'Strengthened our healthcare technology capabilities through strategic partnership.',
    },
    {
        year: '2025',
        title: '16 Years of Excellence',
        description: 'Celebrating over a decade and a half of trusted partnerships and successful technology transformations.',
    },
];

export default function HistoryPage() {
    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/who-we-are">Who We Are</Link>
                        <span>/</span>
                        <span>History</span>
                    </div>
                    <h1 className={styles.pageTitle}>Our History</h1>
                    <p className={styles.pageSubtitle}>
                        16 years of trusted partnerships, innovative solutions, and
                        unwavering commitment to excellence.
                    </p>
                </div>
            </section>

            {/* Timeline Section */}
            <section className={styles.timelineSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Journey</h2>
                        <p className={styles.sectionSubtitle}>
                            From our founding in 2009 to today, PDG has grown while staying true
                            to our core values of perspective, partnership, and excellence.
                        </p>
                    </div>
                    <div className={styles.timeline}>
                        <div className={styles.timelineLine}></div>
                        {timeline.map((item, index) => (
                            <div
                                key={item.year}
                                className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineItemLeft : styles.timelineItemRight}`}
                            >
                                <div className={styles.timelineCard}>
                                    <span className={styles.timelineYear}>{item.year}</span>
                                    <h3 className={styles.timelineTitle}>{item.title}</h3>
                                    <p className={styles.timelineDescription}>{item.description}</p>
                                </div>
                                <div className={styles.timelineConnector}>
                                    <div className={styles.timelineDot}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Write the next chapter with us</h2>
                    <p className={styles.ctaBannerText}>
                        Join PDG and be part of our continued growth and success.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/careers" className="btn btn-primary btn-lg">
                            Explore Careers
                        </Link>
                        <Link href="/contact" className="btn btn-secondary btn-lg">
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
