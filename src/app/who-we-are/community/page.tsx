import Link from 'next/link';
import Image from 'next/image';
import styles from '../about/about.module.css';

const communityInitiatives = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'STEM Education',
        description: 'Supporting technology education programs in local schools and universities to develop the next generation of IT professionals.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-hands-helping',
        title: 'Pro Bono Consulting',
        description: 'Providing technology expertise to non-profit organizations that are making a difference in our communities.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-leaf',
        title: 'Environmental Responsibility',
        description: 'Committed to sustainable practices in our operations and helping clients reduce their environmental footprint through technology.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-heart',
        title: 'Local Impact',
        description: 'Investing in Ohio communities through employment, partnerships, and charitable giving.',
    },
];

export default function CommunityPage() {
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
                        <span>Community</span>
                    </div>
                    <h1 className={styles.pageTitle}>Our Community</h1>
                    <p className={styles.pageSubtitle}>
                        Giving back to the communities where we live, work, and serve.
                    </p>
                </div>
            </section>

            {/* Intro */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>Community Commitment</h2>
                            <p>
                                At PDG, we believe that our success comes with a responsibility to
                                give back. We're deeply rooted in Ohio, and we're committed to making
                                a positive impact in the communities that have supported our growth.
                            </p>
                            <p>
                                From supporting STEM education to providing pro bono technology
                                consulting for non-profits, we look for meaningful ways to contribute
                                our expertise and resources where they can make the greatest difference.
                            </p>
                            <p>
                                Our community involvement isn't a checkbox—it's an extension of
                                our core values. When we help strengthen our communities, we help
                                create better environments for our clients, our team, and the
                                people we serve.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/posts/community.jpg"
                                alt="PDG Community"
                                fill
                                className={styles.sectionImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Initiatives */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Initiatives</h2>
                        <p className={styles.sectionSubtitle}>
                            Areas where we focus our community investment and involvement.
                        </p>
                    </div>
                    <div className={styles.valueGrid}>
                        {communityInitiatives.map((initiative) => (
                            <div key={initiative.title} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <i className={initiative.icon}></i>
                                </div>
                                <h3 className={styles.valueTitle}>{initiative.title}</h3>
                                <p className={styles.valueDescription}>{initiative.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Partner with purpose</h2>
                    <p className={styles.ctaBannerText}>
                        Work with a company that cares about more than just the bottom line.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Get in Touch
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
