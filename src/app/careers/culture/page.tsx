import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../careers.module.css';

const coreValues = [
    {
        title: 'Excellence',
        description: 'We hold ourselves to the highest standards, delivering work that makes a real difference for our clients and their constituents.',
        icon: 'fa-sharp-duotone fa-solid fa-trophy',
    },
    {
        title: 'Integrity',
        description: 'We do the right thing, even when no one is watching. Our clients trust us with their most critical systems.',
        icon: 'fa-sharp-duotone fa-solid fa-handshake',
    },
    {
        title: 'Collaboration',
        description: 'Great solutions come from diverse perspectives working together. We value every team member\'s contribution.',
        icon: 'fa-sharp-duotone fa-solid fa-users',
    },
    {
        title: 'Innovation',
        description: 'We stay ahead of technology trends to bring cutting-edge solutions to our clients\' challenges.',
        icon: 'fa-sharp-duotone fa-solid fa-lightbulb',
    },
    {
        title: 'Growth',
        description: 'We invest in our people, believing that individual growth drives organizational success.',
        icon: 'fa-sharp-duotone fa-solid fa-chart-line',
    },
    {
        title: 'Impact',
        description: 'We measure success by the positive change we create in the lives of citizens and organizations.',
        icon: 'fa-sharp-duotone fa-solid fa-bullseye-arrow',
    },
];

export default function CulturePage() {
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
                            <span>Culture & Values</span>
                        </div>
                        <h1 className={styles.pageTitle}>Culture & Values</h1>
                        <p className={styles.pageSubtitle}>
                            The principles that guide how we work and who we are.
                        </p>
                    </div>
                </section>

                {/* Core Values */}
                <section className={styles.benefitsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Our Core Values</h2>
                            <p className={styles.sectionSubtitle}>
                                The foundation of everything we do at PDG
                            </p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            {coreValues.map((value) => (
                                <div key={value.title} className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>
                                        <i className={value.icon}></i>
                                    </div>
                                    <h3 className={styles.benefitTitle}>{value.title}</h3>
                                    <p className={styles.benefitDescription}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Share our values?</h2>
                        <p className={styles.ctaBannerText}>
                            Join a team that believes in making a difference.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/careers/openings" className="btn btn-primary btn-lg">
                                Explore Opportunities
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
