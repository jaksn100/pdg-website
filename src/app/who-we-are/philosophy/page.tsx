import Link from 'next/link';
import Image from 'next/image';
import styles from '../about/about.module.css';

const philosophyPrinciples = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-eye',
        title: 'See Differently',
        description: 'Every challenge has a solution waiting to be discovered. Our perspective uncovers opportunities that others overlook, transforming complex problems into strategic advantages.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-compass',
        title: 'Lead with Purpose',
        description: 'Technology is a means, not an end. We focus on outcomes that matter—helping organizations achieve their missions more effectively.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-link',
        title: 'Build Lasting Relationships',
        description: 'True partnership goes beyond transactions. We invest in understanding our clients deeply and stand by them through every challenge.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-scale-balanced',
        title: 'Balance Innovation with Reliability',
        description: 'Government and enterprise clients need innovation, but they also need stability. We find the sweet spot that delivers progress without risk.',
    },
];

export default function PhilosophyPage() {
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
                        <span>Philosophy</span>
                    </div>
                    <h1 className={styles.pageTitle}>Our Philosophy</h1>
                    <p className={styles.pageSubtitle}>
                        The perspective that guides everything we do and shapes
                        every solution we deliver.
                    </p>
                </div>
            </section>

            {/* Philosophy Intro */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.contentGrid}>
                        <div className={styles.contentBlock}>
                            <h2 className={styles.sectionTitle}>The PDG Perspective</h2>
                            <p>
                                At PDG, we believe that the right perspective changes everything.
                                It's not just about having the technical skills to solve problems—it's
                                about seeing those problems differently in the first place.
                            </p>
                            <p>
                                When our clients face complex technology challenges, they don't need
                                another vendor. They need a partner who can step back, see the bigger
                                picture, and help them chart a path forward that aligns with their
                                strategic goals.
                            </p>
                            <p>
                                This philosophy has guided us for over 16 years, through countless
                                engagements with government agencies and enterprise partners. It's
                                why we're trusted by the organizations that matter most—and why we
                                continue to deliver results that exceed expectations.
                            </p>
                        </div>
                        <div className={styles.imageContainer}>
                            <Image
                                src="/posts/pdg-philosophy.jpg"
                                alt="PDG Philosophy"
                                fill
                                className={styles.sectionImage}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Principles */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Guiding Principles</h2>
                        <p className={styles.sectionSubtitle}>
                            These principles shape how we approach every engagement and
                            every relationship we build.
                        </p>
                    </div>
                    <div className={styles.valueGrid}>
                        {philosophyPrinciples.map((principle) => (
                            <div key={principle.title} className={styles.valueCard}>
                                <div className={styles.valueIcon}>
                                    <i className={principle.icon}></i>
                                </div>
                                <h3 className={styles.valueTitle}>{principle.title}</h3>
                                <p className={styles.valueDescription}>{principle.description}</p>
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
                            "The best solutions don't come from having all the answers. They come
                            from asking the right questions and seeing the challenge from a
                            perspective that illuminates new possibilities."
                        </p>
                        <p className={styles.quoteAuthor}>— The PDG Approach</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Experience the PDG perspective</h2>
                    <p className={styles.ctaBannerText}>
                        Let us show you what's possible with the right partner by your side.
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
