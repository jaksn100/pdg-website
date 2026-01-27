'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './apply.module.css';

interface ApplicationFormProps {
    jobTitle: string;
    jobId: string;
}

export default function ApplicationForm({ jobTitle, jobId }: ApplicationFormProps) {
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        linkedin: '',
        resumeLink: '',
        coverLetter: '',
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));

        // In a real implementation:
        // await fetch('/api/applications', { body: JSON.stringify({...formData, jobId}) })

        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className={styles.successCard}>
                <div className={styles.successIcon}>
                    <i className="fa-sharp-duotone fa-solid fa-circle-check"></i>
                </div>
                <h3>Application Received!</h3>
                <p>
                    Thanks for applying to be a <strong>{jobTitle}</strong>.
                    We've received your information and will review it shortly.
                </p>
                <div className={styles.successActions}>
                    <Link href="/careers/openings" className="btn btn-primary">
                        View Other Openings
                    </Link>
                    <Link href="/" className="btn btn-outline">
                        Back Home
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div className={styles.formRow}>
                <div className={styles.formGroup}>
                    <label htmlFor="firstName">First Name *</label>
                    <input
                        type="text"
                        id="firstName"
                        required
                        value={formData.firstName}
                        onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        placeholder="First name"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="lastName">Last Name *</label>
                    <input
                        type="text"
                        id="lastName"
                        required
                        value={formData.lastName}
                        onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        placeholder="Last name"
                    />
                </div>
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="email">Email Address *</label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="linkedin">LinkedIn Profile (Optional)</label>
                <input
                    type="url"
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    placeholder="https://linkedin.com/in/..."
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="resumeLink">Resume Link or Text *</label>
                <p className={styles.helperText}>Please provide a link to your resume (Google Drive, Dropbox) or paste text.</p>
                <input
                    type="text"
                    id="resumeLink"
                    required
                    value={formData.resumeLink}
                    onChange={(e) => setFormData({ ...formData, resumeLink: e.target.value })}
                    placeholder="Link to resume or paste content"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="coverLetter">Cover Letter (Optional)</label>
                <textarea
                    id="coverLetter"
                    rows={5}
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    placeholder="Why are you a good fit for this role?"
                ></textarea>
            </div>

            <div className={styles.formFooter}>
                <button type="submit" className="btn btn-primary btn-lg" disabled={loading}>
                    {loading ? (
                        <>
                            <i className="fa-sharp-duotone fa-solid fa-spinner fa-spin"></i>
                            Submitting...
                        </>
                    ) : (
                        <>
                            Submit Application
                            <i className="fa-sharp-duotone fa-solid fa-paper-plane"></i>
                        </>
                    )}
                </button>
            </div>
        </form>
    );
}
