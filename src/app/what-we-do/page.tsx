import Link from 'next/link';
import styles from './services.module.css';

const services = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-shield-check',
        title: 'Governance, Risk & Compliance',
        description: 'Comprehensive GRC solutions that help organizations navigate regulatory landscapes, manage risk effectively, and maintain compliance with confidence.',
        href: '/what-we-do/grc',
        features: ['Risk Assessment', 'Compliance Frameworks', 'Policy Development', 'Audit Support'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-diagram-project',
        title: 'Atlassian Solutions',
        description: 'Expert implementation, customization, and optimization of Atlassian products for enterprise collaboration and project management.',
        href: '/what-we-do/atlassian',
        features: ['Jira Implementation', 'Confluence Setup', 'Custom Workflows', 'Migration Services'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-fingerprint',
        title: 'Identity & Access Management',
        description: 'Secure, scalable IAM solutions that protect your organization while enabling productivity and streamlined user experiences.',
        href: '/what-we-do/iam',
        features: ['SSO Implementation', 'MFA Solutions', 'Access Governance', 'Identity Federation'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-cart-shopping',
        title: 'eCommerce',
        description: 'Shopify development and integration services for modern digital commerce, from storefront design to backend integration.',
        href: '/what-we-do/ecommerce',
        features: ['Shopify Setup', 'Theme Development', 'App Integration', 'Performance Optimization'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-cloud',
        title: 'Cloud Development',
        description: 'AWS and GCP expertise to architect, migrate, and optimize your cloud infrastructure for performance, security, and cost efficiency.',
        href: '/what-we-do/cloud',
        features: ['Cloud Migration', 'Architecture Design', 'DevOps & CI/CD', 'Cost Optimization'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-graduation-cap',
        title: 'Learning Management Systems',
        description: 'Absorb LMS implementation and customization for effective organizational learning and training program management.',
        href: '/what-we-do/lms',
        features: ['LMS Implementation', 'Content Migration', 'Custom Integration', 'Reporting & Analytics'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-file-code',
        title: 'Content Management Systems',
        description: 'Headless CMS solutions including Contentful for flexible, scalable content management across digital channels.',
        href: '/what-we-do/cms',
        features: ['Contentful Setup', 'Content Modeling', 'API Integration', 'Multi-channel Publishing'],
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-gears',
        title: 'Systems Integration',
        description: 'Legacy modernization and enterprise integration solutions that connect systems, streamline processes, and enable digital transformation.',
        href: '/what-we-do/systems-integration',
        features: ['API Development', 'Legacy Modernization', 'Data Integration', 'Process Automation'],
    },
];

export default function WhatWeDoPage() {
    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <span>What We Do</span>
                    </div>
                    <h1 className={styles.pageTitle}>What We Do</h1>
                    <p className={styles.pageSubtitle}>
                        Comprehensive IT solutions delivered with enterprise expertise
                        and boutique agility.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className={styles.servicesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Service Offerings</h2>
                        <p className={styles.sectionSubtitle}>
                            From governance and compliance to cloud infrastructure, we deliver
                            specialized expertise across the modern technology landscape.
                        </p>
                    </div>
                    <div className={styles.servicesGrid}>
                        {services.map((service) => (
                            <Link key={service.title} href={service.href} className={styles.serviceCard}>
                                <div className={styles.serviceHeader}>
                                    <div className={styles.serviceIcon}>
                                        <i className={service.icon}></i>
                                    </div>
                                    <h3 className={styles.serviceTitle}>{service.title}</h3>
                                </div>
                                <p className={styles.serviceDescription}>{service.description}</p>
                                <ul className={styles.serviceFeatures}>
                                    {service.features.map((feature) => (
                                        <li key={feature}>
                                            <i className="fa-sharp-duotone fa-solid fa-check"></i>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <span className={styles.serviceLink}>
                                    Learn more
                                    <i className="fa-sharp-duotone fa-solid fa-arrow-right"></i>
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Need a custom solution?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss your unique challenges and how PDG can help.
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
