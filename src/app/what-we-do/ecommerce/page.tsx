import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-store',
        title: 'Shopify Store Setup',
        description: 'Complete storefront setup and configuration optimized for your brand and products.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-palette',
        title: 'Theme Development',
        description: 'Custom theme design and development that creates unique shopping experiences.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-puzzle-piece',
        title: 'App Integration',
        description: 'Strategic app selection and integration to extend your store capabilities.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-credit-card',
        title: 'Payment & Checkout',
        description: 'Optimized checkout flows and payment gateway integration for higher conversions.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-gauge-high',
        title: 'Performance Optimization',
        description: 'Speed and performance tuning for better user experience and SEO.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-chart-bar',
        title: 'Analytics & Reporting',
        description: 'Data-driven insights to understand customer behavior and drive growth.',
    },
];

export default function EcommercePage() {
    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/what-we-do">What We Do</Link>
                        <span>/</span>
                        <span>eCommerce</span>
                    </div>
                    <h1 className={styles.pageTitle}>eCommerce</h1>
                    <p className={styles.pageSubtitle}>
                        Shopify development and integration for modern digital commerce.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Commerce That Converts</h2>
                            <p>
                                Digital commerce is no longer optional—it's essential. Whether you're
                                launching a new online store or optimizing an existing presence, the
                                right platform and implementation make all the difference.
                            </p>
                            <p>
                                PDG's eCommerce practice specializes in Shopify, the leading commerce
                                platform trusted by millions of businesses. We help organizations
                                create seamless shopping experiences that drive conversions and build
                                customer loyalty.
                            </p>
                            <p>
                                From initial setup to ongoing optimization, we're your partner for
                                commerce success.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>eCommerce Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our eCommerce Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            End-to-end Shopify services for businesses of all sizes.
                        </p>
                    </div>
                    <div className={styles.capabilitiesGrid}>
                        {capabilities.map((capability) => (
                            <div key={capability.title} className={styles.capabilityCard}>
                                <div className={styles.capabilityIcon}>
                                    <i className={capability.icon}></i>
                                </div>
                                <h3 className={styles.capabilityTitle}>{capability.title}</h3>
                                <p className={styles.capabilityDescription}>{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Ready to grow your online business?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you build a commerce experience that converts.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Start a Conversation
                        </Link>
                        <Link href="/what-we-do" className="btn btn-secondary btn-lg">
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
