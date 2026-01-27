'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../admin.module.css';

interface Job {
    id: string;
    title: string;
    department: string;
    location: string;
    type: string;
    description: string;
    requirements: string | null;
    published: boolean;
}

export default function JobEditForm({ job }: { job: Job }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: job.title,
        department: job.department,
        location: job.location,
        type: job.type,
        description: job.description,
        requirements: job.requirements || '',
        published: job.published,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/admin/jobs/${job.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/admin/jobs');
                router.refresh();
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to update job opening');
            }
        } catch (error) {
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>Edit Job Opening</h1>
                    <p className={styles.pageSubtitle}>{job.title}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.formCard}>
                <div className={styles.formGroup}>
                    <label>Job Title *</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Senior Software Engineer"
                        required
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label>Department *</label>
                        <input
                            type="text"
                            value={formData.department}
                            onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                            placeholder="e.g., Engineering"
                            required
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Location *</label>
                        <input
                            type="text"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            placeholder="e.g., Columbus, OH (Hybrid)"
                            required
                        />
                    </div>
                </div>

                <div className={styles.formGroup}>
                    <label>Employment Type *</label>
                    <select
                        value={formData.type}
                        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                        required
                    >
                        <option value="Full-time">Full-time</option>
                        <option value="Part-time">Part-time</option>
                        <option value="Contract">Contract</option>
                        <option value="Internship">Internship</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Job Description *</label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Describe the role, responsibilities, and what the candidate will be doing..."
                        style={{ minHeight: '200px' }}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Requirements</label>
                    <textarea
                        value={formData.requirements}
                        onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                        placeholder="List required skills, experience, and qualifications..."
                        style={{ minHeight: '150px' }}
                    />
                </div>

                <div className={styles.formGroup}>
                    <div className={styles.checkboxGroup}>
                        <input
                            type="checkbox"
                            id="published"
                            checked={formData.published}
                            onChange={(e) => setFormData({ ...formData, published: e.target.checked })}
                        />
                        <label htmlFor="published">Published</label>
                    </div>
                </div>

                <div className={styles.formActions}>
                    <button type="submit" className={styles.submitButton} disabled={loading}>
                        {loading ? (
                            <>
                                <i className="fa-sharp-duotone fa-solid fa-spinner fa-spin"></i>
                                Saving...
                            </>
                        ) : (
                            <>
                                <i className="fa-sharp-duotone fa-solid fa-check"></i>
                                Save Changes
                            </>
                        )}
                    </button>
                    <Link href="/admin/jobs" className={styles.cancelButton}>
                        Cancel
                    </Link>
                </div>
            </form>
        </>
    );
}
