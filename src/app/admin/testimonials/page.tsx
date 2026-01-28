import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../admin.module.css';
import DeleteButton from '../articles/DeleteButton'; // Reuse or create generic

async function getTestimonials() {
    return prisma.testimonial.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export default async function AdminTestimonialsPage() {
    const testimonials = await getTestimonials();

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Testimonials</h1>
                <Link href="/admin/testimonials/new" className="btn btn-primary">
                    New Testimonial
                </Link>
            </div>

            <div className={styles.tableWrapper}>
                <table className={styles.table}>
                    <thead>
                        <tr>
                            <th>Author / Company</th>
                            <th>Service Tag</th>
                            <th>Featured</th>
                            <th>Date</th>
                            <th className="text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {testimonials.length === 0 ? (
                            <tr>
                                <td colSpan={5} className="text-center py-8 text-neutral-500">
                                    No testimonials found.
                                </td>
                            </tr>
                        ) : (
                            testimonials.map((t) => (
                                <tr key={t.id}>
                                    <td>
                                        <div className="font-medium">{t.author}</div>
                                        <div className="text-sm text-neutral-500">{t.company}</div>
                                    </td>
                                    <td>
                                        <span className={styles.badge}>{t.service}</span>
                                    </td>
                                    <td>
                                        {t.featured ? (
                                            <span className={styles.statusPublished}>Featured</span>
                                        ) : (
                                            <span className="text-neutral-400">-</span>
                                        )}
                                    </td>
                                    <td>{new Date(t.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <div className={styles.actions}>
                                            <Link
                                                href={`/admin/testimonials/${t.id}`}
                                                className={styles.actionIcon}
                                                title="Edit"
                                            >
                                                <i className="fa-regular fa-pen-to-square"></i>
                                            </Link>
                                            <DeleteButton
                                                id={t.id}
                                                endpoint="/api/admin/testimonials"
                                                redirect="/admin/testimonials"
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
