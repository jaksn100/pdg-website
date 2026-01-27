import Link from 'next/link';
import styles from '../services.module.css';

const capabilities = [
    {
        icon: 'fa-sharp-duotone fa-solid fa-cloud-arrow-up',
        title: 'Cloud Migration',
        description: 'Strategic migration of workloads to AWS and GCP with minimal disruption and maximum ROI.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-sitemap',
        title: 'Architecture Design',
        description: 'Scalable, secure, and cost-effective cloud architectures tailored to your requirements.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-code-branch',
        title: 'DevOps & CI/CD',
        description: 'Automated pipelines and infrastructure-as-code for faster, more reliable deployments.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-lock',
        title: 'Cloud Security',
        description: 'Comprehensive security controls, monitoring, and compliance for cloud environments.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-coins',
        title: 'Cost Optimization',
        description: 'Analysis and optimization of cloud spending to maximize value and reduce waste.',
    },
    {
        icon: 'fa-sharp-duotone fa-solid fa-server',
        title: 'Managed Services',
        description: 'Ongoing management and optimization of your cloud infrastructure.',
    },
];

export default function CloudPage() {
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
                        <span>Cloud Development</span>
                    </div>
                    <h1 className={styles.pageTitle}>Cloud Development</h1>
                    <p className={styles.pageSubtitle}>
                        AWS and GCP expertise to architect, migrate, and optimize your
                        cloud infrastructure.
                    </p>
                </div>
            </section>

            {/* Service Introduction */}
            <section className={styles.serviceIntro}>
                <div className="container">
                    <div className={styles.introGrid}>
                        <div className={styles.introContent}>
                            <h2 className={styles.sectionTitle}>Cloud-First Solutions</h2>
                            <p>
                                The cloud has transformed how organizations build, deploy, and scale
                                technology solutions. But realizing the full potential of cloud
                                infrastructure requires deep expertise and strategic planning.
                            </p>
                            <p>
                                PDG's cloud practice brings together certified AWS and GCP architects
                                with extensive experience in government and enterprise environments.
                                We help organizations migrate confidently, optimize continuously, and
                                innovate rapidly in the cloud.
                            </p>
                            <p>
                                From initial architecture design to ongoing managed services, we're
                                your trusted partner for cloud success.
                            </p>
                        </div>
                        <div className={styles.imagePlaceholder}>
                            <span>Cloud Service Visual</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section className={styles.capabilitiesSection}>
                <div className="container">
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Our Cloud Capabilities</h2>
                        <p className={styles.sectionSubtitle}>
                            Full-spectrum cloud services from migration to optimization.
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
                    <h2 className={styles.ctaBannerTitle}>Ready to accelerate your cloud journey?</h2>
                    <p className={styles.ctaBannerText}>
                        Let's discuss how PDG can help you maximize your cloud investment.
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
