'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import RichTextEditor from '@/components/ui/RichTextEditor';
import styles from '../admin.module.css';

interface TestimonialFormProps {
    initialData?: {
        id?: string;
        author: string;
        company: string;
        quote: string;
        service: string;
        featured: boolean;
    };
    isEditing?: boolean;
}

const SERVICES = [
    'Governance, Risk & Compliance',
    'Atlassian Solutions',
    'Identity & Access Management',
    'eCommerce',
    'Cloud Development',
    'Learning Management Systems',
    'Content Management Systems',
    'Systems Integration',
];

export default function TestimonialForm({ initialData, isEditing = false }: TestimonialFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const [formData, setFormData] = useState({
        author: initialData?.author || '',
        company: initialData?.company || '',
        quote: initialData?.quote || '',
        service: initialData?.service || SERVICES[0],
        featured: initialData?.featured || false,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const url = isEditing
                ? `/api/admin/testimonials/${initialData?.id}`
                : '/api/admin/testimonials';

            const method = isEditing ? 'PUT' : 'POST';

            const res = await fetch(url, {
                method,
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!res.ok) throw new Error('Failed to save testimonial');

            router.push('/admin/testimonials');
            router.refresh();
        } catch (err) {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            {error && <div className={styles.error}>{error}</div>}

            <div className={styles.formGroup}>
                <label htmlFor="author">Author Name</label>
                <input
                    type="text"
                    id="author"
                    value={formData.author}
                    onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                    required
                    className={styles.input}
                    placeholder="e.g. John Doe"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="company">Company</label>
                <input
                    type="text"
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                    className={styles.input}
                    placeholder="e.g. Tech Corp"
                />
            </div>

            <div className={styles.formGroup}>
                <label htmlFor="service">Service Tag</label>
                <select
                    id="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={styles.select}
                >
                    {SERVICES.map((s) => (
                        <option key={s} value={s}>{s}</option>
                    ))}
                </select>
                <small className={styles.helperText}>Used for filtering on the client stories page.</small>
            </div>

            <div className={styles.formGroup}>
                <label>Quote</label>
                <div className={styles.editorWrapper}>
                    <RichTextEditor
                        value={formData.quote}
                        onChange={(val) => setFormData({ ...formData, quote: val })}
                    />
                </div>
            </div>

            <div className={styles.checkboxGroup}>
                <input
                    type="checkbox"
                    id="featured"
                    checked={formData.featured}
                    onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
                />
                <label htmlFor="featured">Feature this testimonial on the main Clients page?</label>
            </div>

            <div className={styles.formActions}>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="btn btn-secondary"
                    disabled={isLoading}
                >
                    Cancel
                </button>
                <button type="submit" className="btn btn-primary" disabled={isLoading}>
                    {isLoading ? 'Saving...' : isEditing ? 'Update Testimonial' : 'Create Testimonial'}
                </button>
            </div>
        </form>
    );
}
