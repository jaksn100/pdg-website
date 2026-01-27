import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import styles from '../../careers.module.css';

async function getJobOpening(slug: string) {
    return prisma.jobOpening.findUnique({
        where: {
            slug,
            published: true,
        },
    });
}

function formatDate(date: Date | null): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    }).format(new Date(date));
}

export default async function JobOpeningPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const job = await getJobOpening(slug);

    if (!job) {
        notFound();
    }

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
                            <Link href="/careers/openings">Current Openings</Link>
                            <span>/</span>
                            <span>{job.title}</span>
                        </div>
                        <h1 className={styles.pageTitle}>{job.title}</h1>
                        <div className={styles.jobDetailMeta}>
                            <span>
                                <i className="fa-sharp-duotone fa-solid fa-building"></i>
                                {job.department}
                            </span>
                            <span>
                                <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                {job.location}
                            </span>
                            <span>
                                <i className="fa-sharp-duotone fa-solid fa-clock"></i>
                                {job.type}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Job Details */}
                <section className={styles.jobDetailSection}>
                    <div className="container">
                        <div className={styles.jobDetailContent}>
                            <div className={styles.jobDetailMain}>
                                <div className={styles.jobSection}>
                                    <h2>About This Role</h2>
                                    <div
                                        className={styles.jobBody}
                                        dangerouslySetInnerHTML={{ __html: job.description }}
                                    />
                                </div>

                                {job.requirements && (
                                    <div className={styles.jobSection}>
                                        <h2>Requirements</h2>
                                        <div
                                            className={styles.jobBody}
                                            dangerouslySetInnerHTML={{ __html: job.requirements }}
                                        />
                                    </div>
                                )}
                            </div>

                            <div className={styles.jobDetailSidebar}>
                                <div className={styles.jobApplyCard}>
                                    <h3>Ready to apply?</h3>
                                    <p>Submit your application and join our team.</p>
                                    <Link href={`/careers/apply/${job.slug}`} className="btn btn-primary btn-lg" style={{ width: '100%' }}>
                                        Apply Now
                                    </Link>
                                </div>

                                <div className={styles.jobInfoCard}>
                                    <h4>Position Details</h4>
                                    <ul>
                                        <li>
                                            <strong>Department</strong>
                                            <span>{job.department}</span>
                                        </li>
                                        <li>
                                            <strong>Location</strong>
                                            <span>{job.location}</span>
                                        </li>
                                        <li>
                                            <strong>Type</strong>
                                            <span>{job.type}</span>
                                        </li>
                                        <li>
                                            <strong>Posted</strong>
                                            <span>{formatDate(job.publishedAt)}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className={styles.ctaBanner}>
                    <div className="container">
                        <h2 className={styles.ctaBannerTitle}>Not the right fit?</h2>
                        <p className={styles.ctaBannerText}>
                            Explore other opportunities or send us your resume for future openings.
                        </p>
                        <div className={styles.ctaBannerActions}>
                            <Link href="/careers/openings" className="btn btn-primary btn-lg">
                                View All Openings
                            </Link>
                            <Link href="/contact" className="btn btn-outline btn-lg">
                                Contact Us
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
