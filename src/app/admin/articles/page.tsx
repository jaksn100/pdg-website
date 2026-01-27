import Link from 'next/link';
import prisma from '@/lib/prisma';
import styles from '../admin.module.css';
import { DeleteArticleButton } from './DeleteButton';

const categoryLabels: Record<string, string> = {
    INSIGHTS: 'Insights',
    CASE_STUDIES: 'Case Studies',
    WHITE_PAPERS: 'White Papers',
};

async function getArticles() {
    return prisma.article.findMany({
        orderBy: { createdAt: 'desc' },
    });
}

export default async function AdminArticlesPage() {
    const articles = await getArticles();

    return (
        <>
            <div className={styles.pageHeader}>
                <div>
                    <h1 className={styles.pageTitle}>Articles</h1>
                    <p className={styles.pageSubtitle}>Manage insights, case studies, and white papers</p>
                </div>
                <Link href="/admin/articles/new" className={styles.submitButton}>
                    <i className="fa-sharp-duotone fa-solid fa-plus"></i>
                    New Article
                </Link>
            </div>

            <div className={styles.contentCard}>
                {articles.length === 0 ? (
                    <div className={styles.emptyState}>
                        <i className="fa-sharp-duotone fa-solid fa-newspaper"></i>
                        <h3>No articles yet</h3>
                        <p>Create your first article to get started</p>
                    </div>
                ) : (
                    <table className={styles.contentTable}>
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {articles.map((article) => (
                                <tr key={article.id}>
                                    <td>
                                        <strong>{article.title}</strong>
                                        {article.subhead && (
                                            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--color-neutral-500)', marginTop: '4px' }}>
                                                {article.subhead}
                                            </div>
                                        )}
                                    </td>
                                    <td>{categoryLabels[article.category]}</td>
                                    <td>
                                        <span className={`${styles.statusBadge} ${article.published ? styles.published : styles.draft}`}>
                                            {article.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td>{new Date(article.createdAt).toLocaleDateString()}</td>
                                    <td>
                                        <div className={styles.actionButtons}>
                                            <Link
                                                href={`/admin/articles/${article.id}`}
                                                className={styles.actionButton}
                                                title="Edit"
                                            >
                                                <i className="fa-sharp-duotone fa-solid fa-pen"></i>
                                            </Link>
                                            <DeleteArticleButton id={article.id} title={article.title} />
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
