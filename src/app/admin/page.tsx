import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from './admin.module.css';

async function getStats() {
    const [articlesCount, jobsCount, publishedArticles, publishedJobs, testimonialsCount, featuredTestimonials] = await Promise.all([
        prisma.article.count(),
        prisma.jobOpening.count(),
        prisma.article.count({ where: { published: true } }),
        prisma.jobOpening.count({ where: { published: true } }),
        prisma.testimonial.count(),
        prisma.testimonial.count({ where: { featured: true } }),
    ]);

    return {
        articlesCount,
        jobsCount,
        publishedArticles,
        publishedJobs,
        testimonialsCount,
        featuredTestimonials,
    };
}

export default async function AdminDashboardPage() {
    const stats = await getStats();

    return (
        <>
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>Dashboard</h1>
                    <p className={styles.pageSubtitle}>Manage your content and job postings</p>
                </div>
            </div>

            {/* Quick Actions */}
            <div className={styles.quickActions}>
                <Link href="/admin/articles/new" className={styles.quickActionCard}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    <span>New Article</span>
                </Link>
                <Link href="/admin/testimonials/new" className={styles.quickActionCard}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    <span>New Testimonial</span>
                </Link>
                <Link href="/admin/jobs/new" className={styles.quickActionCard}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    <span>New Job Opening</span>
                </Link>
                <Link href="/" target="_blank" className={styles.quickActionCard}>
                    <i className="fa-sharp-duotone fa-solid fa-arrow-up-right-from-square"></i>
                    <span>View Site</span>
                </Link>
            </div>

            {/* Stats */}
            <div className={styles.statsGrid}>
                <Link href="/admin/articles" className={styles.statCard}>
                    <div className={styles.statIcon}>
                        <i className="fa-sharp-duotone fa-solid fa-newspaper"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Total Articles</h3>
                        <p>{stats.articlesCount}</p>
                    </div>
                </Link>

                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                        <i className="fa-sharp-duotone fa-solid fa-circle-check"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Published Articles</h3>
                        <p>{stats.publishedArticles}</p>
                    </div>
                </div>

                <Link href="/admin/jobs" className={styles.statCard}>
                    <div className={styles.statIcon}>
                        <i className="fa-sharp-duotone fa-solid fa-briefcase"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Job Openings</h3>
                        <p>{stats.jobsCount}</p>
                    </div>
                </Link>

                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                        <i className="fa-sharp-duotone fa-solid fa-user-check"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Active Positions</h3>
                        <p>{stats.publishedJobs}</p>
                    </div>
                </div>

                <Link href="/admin/testimonials" className={styles.statCard}>
                    <div className={styles.statIcon}>
                        <i className="fa-sharp-duotone fa-solid fa-quote-left"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Testimonials</h3>
                        <p>{stats.testimonialsCount}</p>
                    </div>
                </Link>

                <div className={styles.statCard}>
                    <div className={styles.statIcon} style={{ background: 'rgba(34, 197, 94, 0.1)', color: '#22c55e' }}>
                        <i className="fa-sharp-duotone fa-solid fa-star"></i>
                    </div>
                    <div className={styles.statInfo}>
                        <h3>Featured</h3>
                        <p>{stats.featuredTestimonials}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
