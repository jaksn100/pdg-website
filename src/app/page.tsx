import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';
import Link from 'next/link';

const services = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-shield-check',
        title: 'Governance, Risk & Compliance',
        description: 'Comprehensive GRC solutions that help organizations navigate regulatory landscapes with confidence.',
        href: '/what-we-do/grc',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-diagram-project',
        title: 'Atlassian Solutions',
        description: 'Expert implementation and optimization of Atlassian products for enterprise collaboration.',
        href: '/what-we-do/atlassian',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-fingerprint',
        title: 'Identity & Access Management',
        description: 'Secure, scalable IAM solutions that protect your organization while enabling productivity.',
        href: '/what-we-do/iam',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-cloud',
        title: 'Cloud Development',
        description: 'AWS and GCP expertise to architect, migrate, and optimize your cloud infrastructure.',
        href: '/what-we-do/cloud',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-cart-shopping',
        title: 'eCommerce',
        description: 'Shopify development and integration services for modern digital commerce.',
        href: '/what-we-do/ecommerce',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'Learning Management',
        description: 'Absorb LMS implementation and customization for effective organizational learning.',
        href: '/what-we-do/lms',
    },
];

const differentiators = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-building-columns',
        title: 'Established Credibility',
        description: '16+ years of proven excellence with government agencies and enterprise partners.',
        stat: '16+',
        statLabel: 'Years of Excellence',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-brain',
        title: 'Deep Expertise',
        description: 'Specialized knowledge across modern IT domains: IAM, Cloud, Atlassian, GRC, and more.',
        stat: '14',
        statLabel: 'Years Government Service',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-rocket',
        title: 'Agile Delivery',
        description: 'Faster and more adaptable than large consultancies, without sacrificing quality.',
        stat: '100%',
        statLabel: 'Client Satisfaction',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-handshake',
        title: 'Partnership Focus',
        description: 'Long-term relationships with trusted partners including Deloitte, Accenture, and Gainwell.',
        stat: '50+',
        statLabel: 'Major Engagements',
    },
];

const clients = [
    { name: 'Ohio Department of Medicaid', abbr: 'ODM' },
    { name: 'Ohio Department of Aging', abbr: 'ODA' },
    { name: 'Ohio Department of Job and Family Services', abbr: 'ODJFS' },
    { name: 'InnovateOhio Platform', abbr: 'IOP' },
    { name: 'Deloitte', abbr: 'Deloitte' },
    { name: 'Accenture', abbr: 'Accenture' },
    { name: 'Gainwell Technologies', abbr: 'Gainwell' },
    { name: 'Maximus', abbr: 'Maximus' },
];

const insights = [
    {
        category: 'Case Study',
        title: 'Modernizing State Government IT Infrastructure',
        excerpt: 'How PDG helped transform legacy systems into a modern, scalable architecture.',
        href: '/our-thinking/case-studies/state-it-modernization',
    },
    {
        category: 'Insights',
        title: 'The Future of Identity & Access Management',
        excerpt: 'Emerging trends and best practices in enterprise IAM solutions.',
        href: '/our-thinking/insights/future-of-iam',
    },
    {
        category: 'White Paper',
        title: 'GRC Framework for Government Agencies',
        excerpt: 'A comprehensive guide to building effective governance, risk, and compliance programs.',
        href: '/our-thinking/resources/grc-framework-guide',
    },
];

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* Hero Section */}
                <section className={styles.hero}>
                    <div className={styles.heroBackground}>
                        <div className={styles.heroImage}></div>
                        <div className={styles.heroGradient}></div>
                        <div className={styles.heroPattern}></div>
                        {/* <div className={styles.heroProfessionals}></div> */}

                        {/* Animated Visual Elements */}

                        <div className={styles.heroOrbs}>
                            <div className={`${styles.heroOrb} ${styles.heroOrb1}`}></div>
                            <div className={`${styles.heroOrb} ${styles.heroOrb2}`}></div>
                            <div className={`${styles.heroOrb} ${styles.heroOrb3}`}></div>
                            <div className={`${styles.heroOrb} ${styles.heroOrb4}`}></div>
                        </div>

                        <div className={styles.heroNodes}>
                            <div className={`${styles.heroNode} ${styles.heroNode1}`}></div>
                            <div className={`${styles.heroNode} ${styles.heroNode2}`}></div>
                            <div className={`${styles.heroNode} ${styles.heroNode3}`}></div>
                            <div className={`${styles.heroNode} ${styles.heroNode4}`}></div>
                            <div className={`${styles.heroNode} ${styles.heroNode5}`}></div>
                            <div className={`${styles.heroNode} ${styles.heroNode6}`}></div>
                        </div>

                        <div className={styles.heroLines}>
                            <div className={`${styles.heroLine} ${styles.heroLine1}`}></div>
                            <div className={`${styles.heroLine} ${styles.heroLine2}`}></div>
                            <div className={`${styles.heroLine} ${styles.heroLine3}`}></div>
                        </div>
                    </div>
                    <div className={styles.heroContent}>
                        <div className="container">
                            <div className={styles.heroInner}>
                                {/*<span className={styles.heroTag}>
                                    <i className="fa-sharp-duotone fa-solid fa-sparkles" style={{ '--fa-primary-color': '#0175b5', '--fa-secondary-color': '#bbd63d' } as React.CSSProperties}></i>
                                    Trusted Since 2009
                                </span>*/}
                                <h1 className={styles.heroTitle}>
                                    <span className={styles.heroAccent}>Lead</span> with clarity.<br />
                                    <span className={styles.heroAccent}>Build</span> with purpose.<br />
                                    <span className={styles.heroAccent}>Connect</span> with intention.
                                </h1>
                                <p className={styles.heroDescription}>
                                    Perspective Design Group bridges the gap between complex business challenges and scalable systems. From deep-dive analysis to purposeful design, we build the frameworks that government and enterprise leaders trust for long-term growth.
                                </p>
                                <div className={styles.heroActions}>
                                    <Link href="/what-we-do" className="btn btn-primary btn-lg">
                                        Explore Our Services
                                        <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                                    </Link>
                                    <Link href="/who-we-are/about" className="btn btn-secondary btn-lg">
                                        Learn About PDG
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client Logos Section */}
                <section className={styles.clients}>
                    <div className="container">
                        <p className={styles.clientsLabel}>Trusted by leading government agencies and enterprise partners</p>
                        <div className={styles.clientsGrid}>
                            {clients.map((client) => (
                                <div key={client.abbr} className={styles.clientLogo}>
                                    <span className={styles.clientAbbr}>{client.abbr}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Differentiators Section */}
                <section className={styles.differentiators}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Why PDG</span>
                            <h2 className={styles.sectionTitle}>
                                The expertise of a large consultancy.<br />
                                The agility of a specialized partner.
                            </h2>
                            <p className={styles.sectionDescription}>
                                We combine deep government experience with modern technology expertise
                                to deliver solutions that make a real impact.
                            </p>
                        </div>
                        <div className={styles.differentiatorGrid}>
                            {differentiators.map((item) => (
                                <div key={item.title} className={styles.differentiatorCard}>
                                    <div className={styles.differentiatorIcon}>
                                        <i className={item.icon} style={{ "--fa-primary-color": "var(--color-primary)", "--fa-secondary-color": "var(--color-neutral-100)" } as React.CSSProperties}></i>
                                    </div>
                                    <div className={styles.differentiatorStat}>
                                        <span className={styles.statNumber}>{item.stat}</span>
                                        <span className={styles.statLabel}>{item.statLabel}</span>
                                    </div>
                                    <h3 className={styles.differentiatorTitle}>{item.title}</h3>
                                    <p className={styles.differentiatorDescription}>{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section className={styles.services}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>What We Do</span>
                            <h2 className={styles.sectionTitle}>
                                Comprehensive IT solutions<br />
                                for complex challenges
                            </h2>
                            <p className={styles.sectionDescription}>
                                From identity management to cloud infrastructure, we deliver specialized
                                expertise across the modern technology landscape.
                            </p>
                        </div>
                        <div className={styles.servicesGrid}>
                            {services.map((service) => (
                                <Link key={service.title} href={service.href} className={styles.serviceCard}>
                                    <div className={styles.serviceIcon}>
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                    <p className={styles.serviceDescription}>{service.description}</p>
                                    <span className={styles.serviceLink}>
                                        Learn more
                                        <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            ))}
                        </div>
                        <div className={styles.servicesAction}>
                            <Link href="/what-we-do" className="btn btn-secondary">
                                View All Services
                                <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Insights Section */}
                <section className={styles.insights}>
                    <div className="container">
                        <div className={styles.sectionHeader}>
                            <span className={styles.sectionTag}>Our Thinking</span>
                            <h2 className={styles.sectionTitle}>Insights & thought leadership</h2>
                            <p className={styles.sectionDescription}>
                                Explore our latest analysis, case studies, and perspectives on
                                technology trends shaping government and enterprise.
                            </p>
                        </div>
                        <div className={styles.insightsGrid}>
                            {insights.map((insight) => (
                                <Link key={insight.title} href={insight.href} className={styles.insightCard}>
                                    <span className={styles.insightCategory}>{insight.category}</span>
                                    <h3 className={styles.insightTitle}>{insight.title}</h3>
                                    <p className={styles.insightExcerpt}>{insight.excerpt}</p>
                                    <span className={styles.insightLink}>
                                        Read more
                                        <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className={styles.cta}>
                    <div className="container">
                        <div className={styles.ctaContent}>
                            <h2 className={styles.ctaTitle}>Ready to transform your organization?</h2>
                            <p className={styles.ctaDescription}>
                                Let's discuss how PDG can help you navigate complex technology
                                challenges with confidence and expertise.
                            </p>
                            <div className={styles.ctaActions}>
                                <Link href="/contact" className="btn btn-primary btn-lg">
                                    Start a Conversation
                                    <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                                </Link>
                                <Link href="/careers" className="btn btn-dark btn-lg">
                                    Join Our Team
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
