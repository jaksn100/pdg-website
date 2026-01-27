import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from '../careers.module.css';

const pathways = [
    {
        level: 'Associate',
        title: 'Early Career',
        description: 'Begin your journey with mentorship, training, and hands-on project experience.',
        responsibilities: ['Learn from senior consultants', 'Support project delivery', 'Build technical skills', 'Earn certifications'],
    },
    {
        level: 'Consultant',
        title: 'Individual Contributor',
        description: 'Take ownership of project components and develop client relationships.',
        responsibilities: ['Lead workstreams', 'Client communication', 'Solution design', 'Mentor associates'],
    },
    {
        level: 'Senior Consultant',
        title: 'Subject Matter Expert',
        description: 'Drive solutions for complex challenges and guide project strategy.',
        responsibilities: ['Technical leadership', 'Architecture decisions', 'Client advisory', 'Practice development'],
    },
    {
        level: 'Principal / Director',
        title: 'Practice Leadership',
        description: 'Shape our service offerings and lead teams delivering enterprise solutions.',
        responsibilities: ['Practice strategy', 'Team leadership', 'Business development', 'Industry thought leadership'],
    },
];

export default function PathwaysPage() {
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
                            <span>Career Pathways</span>
                        </div>
                        <h1 className={styles.pageTitle}>Career Pathways</h1>
                        <p className={styles.pageSubtitle}>
                            Clear paths for growth and advancement at PDG.
                        </p>
                    </div>
                </section>

                {/* Career Ladder */}
                <section className={styles.positionsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Your Growth Journey</h2>
                            <p className={styles.sectionSubtitle}>
                                From early career to leadership, we support your development every step of the way
                            </p>
                        </div>
                        <div className={styles.positionsList}>
                            {pathways.map((pathway, index) => (
                                <div key={pathway.level} className={styles.positionCard} style={{ borderLeft: '4px solid var(--color-lime)' }}>
                                    <div className={styles.positionInfo}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-2)' }}>
                                            <span style={{
                                                background: 'var(--color-lime)',
                                                color: 'var(--color-dark-blue)',
                                                padding: 'var(--space-1) var(--space-3)',
                                                fontSize: 'var(--text-sm)',
                                                fontWeight: 'var(--font-weight-semibold)'
                                            }}>
                                                Level {index + 1}
                                            </span>
                                            <span style={{ color: 'var(--color-neutral-500)', fontSize: 'var(--text-sm)' }}>{pathway.level}</span>
                                        </div>
                                        <h3 className={styles.positionTitle}>{pathway.title}</h3>
                                        <p style={{ color: 'var(--color-neutral-600)', marginBottom: 'var(--space-4)' }}>{pathway.description}</p>
                                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-2)' }}>
                                            {pathway.responsibilities.map((resp) => (
                                                <span key={resp} className="tag tag-secondary">{resp}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Ready to start your journey?</h2>
                        <p className={styles.ctaBannerText}>
                            Find the role that matches your experience and aspirations.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/careers/openings" className="btn btn-primary btn-lg">
                                View Open Positions
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
