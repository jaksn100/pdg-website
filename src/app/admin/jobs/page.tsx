import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../admin.module.css';
import { DeleteJobButton } from '../articles/DeleteButton';

async function getJobs() {
    return prisma.jobOpening.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export default async function AdminJobsPage() {
    const jobs = await getJobs();

    return (
        <>
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>Job Openings</h1>
                    <p className={styles.pageSubtitle}>Manage career opportunities</p>
                </div>
                <Link href="/admin/jobs/new" className={styles.submitButton}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    New Job Opening
                </Link>
            </div>

            <div className={styles.contentCard}>
                {jobs.length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className="fa-sharp-duotone fa-solid fa-briefcase"></i>
                        <h3>No job openings yet</h3>
                        <p>Create your first job posting to get started</p>
                    </div>
                ) : (
                    <table className={styles.contentTable}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Department</th>
                                <th>Location</th>
                                <th>Type</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {jobs.map((job: { id: string; title: string; department: string; location: string; type: string; published: boolean }) => (
                                <tr key={job.id}>
                                    <td><strong>{job.title}</strong></td>
                                    <td>{job.department}</td>
                                    <td>{job.location}</td>
                                    <td>{job.type}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${job.published ? styles.published : styles.draft}`}>
                                            {job.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td>
                                        <div className={styles.actionButtons}>
                                            <Link
                                                href={`/admin/jobs/${job.id}`}
                                                className={styles.actionButton}
                                                title="Edit"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-pen"></i>
                                            </Link>
                                            <DeleteJobButton id={job.id} title={job.title} />
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
