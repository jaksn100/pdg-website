import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../admin.module.css';
import { DeleteTestimonialButton } from '../articles/DeleteButton';

async function getTestimonials() {
    return prisma.testimonial.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export default async function AdminTestimonialsPage() {
    const testimonials = await getTestimonials();

    return (
        <>
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>Testimonials</h1>
                    <p className={styles.pageSubtitle}>Manage client testimonials and success stories</p>
                </div>
                <Link href="/admin/testimonials/new" className={styles.submitButton}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    New Testimonial
                </Link>
            </div>

            <div className={styles.contentCard}>
                {testimonials.length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className="fa-sharp-duotone fa-solid fa-quote-left"></i>
                        <h3>No testimonials yet</h3>
                        <p>Create your first testimonial to get started</p>
                    </div>
                ) : (
                    <table className={styles.contentTable}>
                        <thead>
                            <tr>
                                <th>Author</th>
                                <th>Company</th>
                                <th>Service</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {testimonials.map((t) => (
                                <tr key={t.id}>
                                    <td><strong>{t.author}</strong></td>
                                    <td>{t.company}</td>
                                    <td>{t.service}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${t.featured ? styles.published : styles.draft}`}>
                                            {t.featured ? 'Featured' : 'Standard'}
                                        </span>
                                    </td>
                                    <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <div className={styles.actionButtons}>
                                            <Link
                                                href={`/admin/testimonials/${t.id}`}
                                                className={styles.actionButton}
                                                title="Edit"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-pen"></i>
                                            </Link>
                                            <DeleteTestimonialButton id={t.id} title={t.author} />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
