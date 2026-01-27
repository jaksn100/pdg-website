import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../careers.module.css';

const highlights = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-laptop-house',
        title: 'Remote-First Culture',
        description: 'Work from anywhere with flexible schedules that respect your work-life balance.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users',
        title: 'Collaborative Teams',
        description: 'Work alongside talented professionals who are passionate about solving complex problems.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-rocket',
        title: 'Meaningful Projects',
        description: 'Our work directly impacts millions of citizens through government technology solutions.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'Continuous Learning',
        description: 'Professional development budget, certifications, and regular knowledge sharing sessions.',
    },
];

const dayInLife = [
    'Collaborative stand-ups with your project team',
    'Deep work time for focused development or consulting',
    'Client meetings and stakeholder collaboration',
    'Team knowledge sharing and lunch & learns',
    'Regular 1:1s with leadership for career growth',
    'Social events and team celebrations',
];

export default function LifeAtPDGPage() {
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
                            <span>Life at PDG</span>
                        </div>
                        <h1 className={styles.pageTitle}>Life at PDG</h1>
                        <p className={styles.pageSubtitle}>
                            Discover what it's like to be part of the PDG team.
                        </p>
                    </div>
                </section>

                {/* Highlights */}
                <section className={styles.benefitsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>What Makes PDG Different</h2>
                            <p className={styles.sectionSubtitle}>
                                A workplace where expertise meets opportunity
                            </p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            {highlights.map((item) => (
                                <div key={item.title} className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>
                                        <i className={item.icon}></i>
                                    </div>
                                    <h3 className={styles.benefitTitle}>{item.title}</h3>
                                    <p className={styles.benefitDescription}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Day in the Life */}
                <section className={styles.whySection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>A Day in the Life</h2>
                            <p className={styles.sectionSubtitle}>
                                What a typical day looks like at PDG
                            </p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {dayInLife.map((item, index) => (
                                <div key={index} className={styles.valueCard}>
                                    <span style={{ color: 'var(--color-lime)', fontWeight: 'var(--font-weight-semibold)', marginRight: 'var(--space-3)' }}>{index + 1}.</span>
                                    <p className={styles.valueDescription} style={{ margin: 0 }}>{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to join us?</h2>
                        <p className={styles.ctaBannerText}>
                            Explore our open positions and find your next opportunity.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/careers/openings" className="btn btn-primary btn-lg">
                                View Openings
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
