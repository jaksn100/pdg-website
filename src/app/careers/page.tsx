import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './careers.module.css';

const openPositions = [
    {
        title: 'Senior GRC Consultant',
        department: 'GRC Practice',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
    },
    {
        title: 'AWS Cloud Architect',
        department: 'Cloud Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
    },
    {
        title: 'Atlassian Solutions Consultant',
        department: 'Atlassian Practice',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
    },
    {
        title: 'IAM Engineer',
        department: 'Identity Services',
        location: 'Columbus, OH / Remote',
        type: 'Full-time',
    },
];

const benefits = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-heart-pulse',
        title: 'Health & Wellness',
        description: 'Comprehensive health, dental, and vision coverage for you and your family.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-piggy-bank',
        title: 'Financial Security',
        description: 'Competitive 401(k) matching to help you build for the future.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-laptop-house',
        title: 'Flexible Work',
        description: 'Remote-first culture with flexible schedules that respect work-life balance.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'Growth & Learning',
        description: 'Professional development budget and certification support.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-plane',
        title: 'Time Off',
        description: 'Generous PTO, holidays, and personal days to recharge.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-users',
        title: 'Team Culture',
        description: 'Collaborative environment with regular team events and celebrations.',
    },
];

const values = [
    {
        title: 'Expert Impact',
        description: 'Work on meaningful projects with real impact for government agencies and enterprise clients.',
    },
    {
        title: 'Growth-Focused',
        description: 'We invest in your development through training, mentorship, and challenging assignments.',
    },
    {
        title: 'Work-Life Harmony',
        description: 'We believe great work happens when people have the flexibility they need.',
    },
    {
        title: 'Collaborative Spirit',
        description: 'Join a team that values diverse perspectives and works together to solve complex challenges.',
    },
];

export default function CareersPage() {
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
                            <span>Careers</span>
                        </div>
                        <h1 className={styles.pageTitle}>Join Our Team</h1>
                        <p className={styles.pageSubtitle}>
                            Build your career at PDG. Make an impact doing meaningful work
                            with a team that values expertise and collaboration.
                        </p>
                    </div>
                </section>

                {/* Why PDG */}
                <section className={styles.whySection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Why Work at PDG?</h2>
                            <p className={styles.sectionSubtitle}>
                                We're building a team of experts who want to do work that matters.
                            </p>
                        </div>
                        <div className={styles.valuesGrid}>
                            {values.map((value) => (
                                <div key={value.title} className={styles.valueCard}>
                                    <h3 className={styles.valueTitle}>{value.title}</h3>
                                    <p className={styles.valueDescription}>{value.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className={styles.positionsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Open Positions</h2>
                            <p className={styles.sectionSubtitle}>
                                Explore our current opportunities and find your next challenge.
                            </p>
                        </div>
                        <div className={styles.positionsList}>
                            {openPositions.map((position) => (
                                <div key={position.title} className={styles.positionCard}>
                                    <div className={styles.positionInfo}>
                                        <h3 className={styles.positionTitle}>{position.title}</h3>
                                        <div className={styles.positionMeta}>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-building"></i>
                                                {position.department}
                                            </span>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                                {position.location}
                                            </span>
                                            <span>
                                                <i className="fa-sharp-duotone fa-solid fa-clock"></i>
                                                {position.type}
                                            </span>
                                        </div>
                                    </div>
                                    <Link href="/contact" className={styles.applyButton}>
                                        Apply Now
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Benefits */}
                <section className={styles.benefitsSection}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <h2 className={styles.sectionTitle}>Benefits & Perks</h2>
                            <p className={styles.sectionSubtitle}>
                                We take care of our team so they can focus on doing great work.
                            </p>
                        </div>
                        <div className={styles.benefitsGrid}>
                            {benefits.map((benefit) => (
                                <div key={benefit.title} className={styles.benefitCard}>
                                    <div className={styles.benefitIcon}>
                                        <i className={benefit.icon}></i>
                                    </div>
                                    <h3 className={styles.benefitTitle}>{benefit.title}</h3>
                                    <p className={styles.benefitDescription}>{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Don't see the right role?</h2>
                        <p className={styles.ctaBannerText}>
                            We're always looking for talented professionals. Send us your resume.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/contact" className="btn btn-primary btn-lg">
                                Get in Touch
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
