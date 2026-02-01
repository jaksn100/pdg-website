import Link from 'next/link';
import Image from 'next/image';
import styles from './leadership.module.css';

export default function LeadershipPage() {
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
                        <span>Leadership</span>
                    </div>
                    <h1 className={styles.pageTitle}>Leadership</h1>
                    <p className={styles.pageSubtitle}>
                        Meet the visionary behind Perspective Design Group.
                    </p>
                </div>
            </section>

            {/* Founder Profile */}
            <section className={styles.founderSection}>
                <div className="container">
                    <div className={styles.founderGrid}>
                        <div className={styles.founderImageContainer}>
                            <div className={styles.founderImageWrapper}>
                                <Image
                                    src="/posts/deshon.jpg"
                                    alt="Deshon Powell"
                                    fill
                                    className={styles.founderImage}
                                />
                            </div>
                        </div>
                        <div className={styles.founderContent}>
                            <div className={styles.founderHeader}>
                                <h2 className={styles.founderName}>Deshon Powell</h2>
                                <p className={styles.founderRole}>CEO & Founder</p>
                            </div>
                            <div className={styles.founderBio}>
                                <p>
                                    Deshon Powell is a business executive with a comprehensive background
                                    spanning business operations, investments, IT services, and software
                                    programming. As the founder and CEO of Perspective Design Group, he
                                    has built a design and development firm that sits at the intersection
                                    of business strategy, visual communication, and technical development.
                                </p>
                                <p>
                                    With over twenty years of business experience, Deshon founded
                                    Perspective Design Group in 2009 in Columbus, Ohio. Under his leadership,
                                    the company has grown into a trusted partner for organizations seeking
                                    "system-level" solutions that go beyond standard creative services.
                                </p>
                                <p>
                                    Deshon's unique perspective—combining deep technical expertise with
                                    strategic business insight—enables PDG to deliver solutions that
                                    address both immediate challenges and long-term growth objectives.
                                    His hands-on approach ensures that every client receives the
                                    personalized attention and expertise that only a boutique firm can provide.
                                </p>
                            </div>
                            <div className={styles.founderDetails}>
                                <div className={styles.detailItem}>
                                    <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                    <span>Columbus, Ohio</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <i className="fa-sharp-duotone fa-solid fa-graduation-cap"></i>
                                    <span>DeVry University</span>
                                </div>
                                <div className={styles.detailItem}>
                                    <i className="fa-sharp-duotone fa-solid fa-calendar"></i>
                                    <span>Founded PDG in 2009</span>
                                </div>
                            </div>
                            <a
                                href="https://www.linkedin.com/in/deshon-powell-2a8b517/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.linkedinLink}
                            >
                                <i className="fa-brands fa-linkedin"></i>
                                Connect on LinkedIn
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Areas */}
            <section className={styles.expertiseSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Areas of Expertise</h2>
                        <p className={styles.sectionSubtitle}>
                            Decades of experience across multiple disciplines.
                        </p>
                    </div>
                    <div className={styles.expertiseGrid}>
                        <div className={styles.expertiseCard}>
                            <div className={styles.expertiseIcon}>
                                <i className="fa-sharp-duotone fa-solid fa-briefcase"></i>
                            </div>
                            <h3 className={styles.expertiseTitle}>Business Operations</h3>
                            <p className={styles.expertiseDescription}>
                                Strategic oversight of organizational processes, resource management,
                                and operational efficiency to drive sustainable growth.
                            </p>
                        </div>
                        <div className={styles.expertiseCard}>
                            <div className={styles.expertiseIcon}>
                                <i className="fa-sharp-duotone fa-solid fa-code"></i>
                            </div>
                            <h3 className={styles.expertiseTitle}>Software Development</h3>
                            <p className={styles.expertiseDescription}>
                                Deep technical knowledge in software programming, enabling PDG
                                to deliver robust, scalable technical solutions.
                            </p>
                        </div>
                        <div className={styles.expertiseCard}>
                            <div className={styles.expertiseIcon}>
                                <i className="fa-sharp-duotone fa-solid fa-server"></i>
                            </div>
                            <h3 className={styles.expertiseTitle}>IT Services</h3>
                            <p className={styles.expertiseDescription}>
                                Comprehensive experience in IT infrastructure, cloud solutions,
                                and technology consulting for enterprise clients.
                            </p>
                        </div>
                        <div className={styles.expertiseCard}>
                            <div className={styles.expertiseIcon}>
                                <i className="fa-sharp-duotone fa-solid fa-chart-line"></i>
                            </div>
                            <h3 className={styles.expertiseTitle}>Strategic Investments</h3>
                            <p className={styles.expertiseDescription}>
                                Financial acumen and investment expertise that informs
                                data-driven business decisions and growth strategies.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote */}
            <section className={styles.quoteSection}>
                <div className="container">
                    <div className={styles.quoteBlock}>
                        <p className={styles.quoteText}>
                            "At PDG, we believe the right perspective transforms challenges into
                            opportunities. We're not just service providers—we're partners invested
                            in your long-term success."
                        </p>
                        <p className={styles.quoteAuthor}>— Deshon Powell, CEO</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Let's Connect</h2>
                    <p className={styles.ctaBannerText}>
                        Ready to discuss how PDG can help your organization achieve its goals?
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
