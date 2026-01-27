import Link from 'next/link';
import styles from '../about/about.module.css';

const leadershipTeam = [
    {
        name: 'Leadership Member',
        role: 'CEO & Founder',
        bio: 'Visionary leader with over 20 years of IT consulting experience, guiding PDG\'s strategic direction and growth.',
    },
    {
        name: 'Leadership Member',
        role: 'Chief Technology Officer',
        bio: 'Technology strategist driving innovation across cloud, IAM, and enterprise architecture solutions.',
    },
    {
        name: 'Leadership Member',
        role: 'VP of Government Services',
        bio: 'Expert in public sector technology transformation with extensive state and federal agency experience.',
    },
    {
        name: 'Leadership Member',
        role: 'VP of Client Solutions',
        bio: 'Client advocate ensuring PDG delivers exceptional value and builds lasting partnerships.',
    },
    {
        name: 'Leadership Member',
        role: 'Director of GRC Practice',
        bio: 'Governance, risk, and compliance specialist helping organizations navigate regulatory complexity.',
    },
    {
        name: 'Leadership Member',
        role: 'Director of Cloud Services',
        bio: 'Cloud architecture expert with deep AWS and GCP expertise, leading modern infrastructure initiatives.',
    },
];

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
                    <h1 className={styles.pageTitle}>Our Leadership</h1>
                    <p className={styles.pageSubtitle}>
                        Experienced professionals committed to delivering excellence
                        in every engagement.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className={styles.contentSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Leadership Team</h2>
                        <p className={styles.sectionSubtitle}>
                            Our leadership brings together decades of experience across government,
                            enterprise, and technology consulting.
                        </p>
                    </div>
                    <div className={styles.teamGrid}>
                        {leadershipTeam.map((member) => (
                            <div key={member.name + member.role} className={styles.teamCard}>
                                <div className={styles.teamPhoto}>
                                    <i className="fa-sharp-duotone fa-solid fa-user"></i>
                                </div>
                                <h3 className={styles.teamName}>{member.name}</h3>
                                <p className={styles.teamRole}>{member.role}</p>
                                <p className={styles.teamBio}>{member.bio}</p>
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
                            "Our leadership team is united by a shared commitment to our clients'
                            success. We bring not just expertise, but genuine care for the outcomes
                            we help create."
                        </p>
                        <p className={styles.quoteAuthor}>— PDG Leadership Philosophy</p>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Join our team</h2>
                    <p className={styles.ctaBannerText}>
                        We're always looking for talented professionals who share our values.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/careers" className="btn btn-primary btn-lg">
                            View Open Positions
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
