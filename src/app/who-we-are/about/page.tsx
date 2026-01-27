import Link from 'next/link';
import styles from './about.module.css';

const coreValues = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-eye',
        title: 'Perspective',
        description: 'We see differently, enabling us to uncover solutions others miss.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-handshake',
        title: 'Partnership',
        description: 'True collaboration with clients, not transactional relationships.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-trophy',
        title: 'Excellence',
        description: 'Uncompromising standards in every deliverable.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-lightbulb',
        title: 'Innovation',
        description: 'Embracing modern solutions while respecting proven approaches.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-shield-check',
        title: 'Integrity',
        description: 'Honest counsel even when it\'s not what you want to hear.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users',
        title: 'Community',
        description: 'Investing in the places and people we serve.',
    },
];

export default function AboutPage() {
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
                        <span>About</span>
                    </div>
                    <h1 className={styles.pageTitle}>About PDG</h1>
                    <p className={styles.pageSubtitle}>
                        Delivering IT consulting excellence with the expertise of a large consultancy
                        and the agility of a specialized partner.
                    </p>
                </div>
            </section>

            {/* Intro Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>Who We Are</h2>
                            <p>
                                Perspective Design Group (PDG) is an IT consulting firm established in 2009,
                                bringing together deep technical expertise with strategic business insight.
                                For over 16 years, we have partnered with government agencies and enterprise
                                organizations to solve complex technology challenges.
                            </p>
                            <p>
                                Our name reflects our core belief: that the right perspective transforms
                                challenges into opportunities. We don't just implement solutions—we help
                                our clients see their technology landscape differently, enabling smarter
                                decisions and more effective outcomes.
                            </p>
                            <p>
                                As a trusted partner to major consultancies including Deloitte, Accenture,
                                and Gainwell Technologies, we bring enterprise-grade capabilities with the
                                responsiveness and personal attention that only a boutique firm can provide.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>PDG Team Image</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Core Values</h2>
                        <p className={styles.sectionSubtitle}>
                            The principles that guide everything we do and every relationship we build.
                        </p>
                    </div>
                    <div className={styles.valueGrid}>
                        {coreValues.map((value) => (
                            <div key={value.title} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <i className={value.icon}></i>
                                </div>
                                <h3 className={styles.valueTitle}>{value.title}</h3>
                                <p className={styles.valueDescription}>{value.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.quoteBlock}>
                        <p className={styles.quoteText}>
                            "We built PDG on a simple premise: that technology consulting doesn't have
                            to be impersonal or impractical. By combining deep expertise with genuine
                            partnership, we help organizations achieve what they once thought impossible."
                        </p>
                        <p className={styles.quoteAuthor}>— PDG Leadership</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to work with us?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you navigate your technology challenges.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </Link>
                        <Link href="/what-we-do" className="btn btn-secondary btn-lg">
                            Explore Our Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
