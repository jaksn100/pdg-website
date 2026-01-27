'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import styles from '../../admin.module.css';

interface Article {
    id: string;
    title: string;
    subhead: string | null;
    content: string;
    category: string;
    tags: string[];
    featureImage: string | null;
    published: boolean;
}

export default function ArticleEditForm({ article }: { article: Article }) {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: article.title,
        subhead: article.subhead || '',
        content: article.content,
        category: article.category,
        tags: article.tags.join(', '),
        featureImage: article.featureImage || '',
        published: article.published,
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/admin/articles/${article.id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
                }),
            });

            if (response.ok) {
                router.push('/admin/articles');
                router.refresh();
            } else {
                const data = await response.json();
                alert(data.error || 'Failed to update article');
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
                    <h1 className={styles.pageTitle}>Edit Article</h1>
                    <p className={styles.pageSubtitle}>{article.title}</p>
                </div>
            </div>

            <form onSubmit={handleSubmit} className={styles.formCard}>
                <div className={styles.formGroup}>
                    <label>Category *</label>
                    <select
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        required
                    >
                        <option value="INSIGHTS">Insights & Thought Leadership</option>
                        <option value="CASE_STUDIES">Case Studies</option>
                        <option value="WHITE_PAPERS">White Papers & Resources</option>
                    </select>
                </div>

                <div className={styles.formGroup}>
                    <label>Title *</label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="Enter article title"
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Subhead</label>
                    <input
                        type="text"
                        value={formData.subhead}
                        onChange={(e) => setFormData({ ...formData, subhead: e.target.value })}
                        placeholder="Brief subtitle or summary"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label>Content *</label>
                    <textarea
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                        placeholder="Write your article content here..."
                        style={{ minHeight: '300px' }}
                        required
                    />
                </div>

                <div className={styles.formRow}>
                    <div className={styles.formGroup}>
                        <label>Tags</label>
                        <input
                            type="text"
                            value={formData.tags}
                            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                            placeholder="Separate tags with commas"
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <label>Feature Image URL</label>
                        <input
                            type="text"
                            value={formData.featureImage}
                            onChange={(e) => setFormData({ ...formData, featureImage: e.target.value })}
                            placeholder="https://example.com/image.jpg"
                        />
                    </div>
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
                    <Link href="/admin/articles" className={styles.cancelButton}>
                        Cancel
                    </Link>
                </div>
            </form>
        </>
    );
}
