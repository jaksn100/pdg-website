'use client';

import { useRouter } from 'next/navigation';
import styles from '../admin.module.css';

export function DeleteArticleButton({ id, title }: { id: string; title: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/articles/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete article');
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className={`${styles.actionButton} ${styles.delete}`}
            title="Delete"
        >
            <i className="fa-sharp-duotone fa-solid fa-trash"></i>
        </button>
    );
}

export function DeleteJobButton({ id, title }: { id: string; title: string }) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm(`Are you sure you want to delete "${title}"? This action cannot be undone.`)) {
            return;
        }

        try {
            const response = await fetch(`/api/admin/jobs/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
            } else {
                alert('Failed to delete job opening');
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className={`${styles.actionButton} ${styles.delete}`}
            title="Delete"
        >
            <i className="fa-sharp-duotone fa-solid fa-trash"></i>
        </button>
    );
}

interface GenericDeleteButtonProps {
    id: string;
    endpoint: string;
    redirect?: string;
}

export default function DeleteButton({ id, endpoint, redirect }: GenericDeleteButtonProps) {
    const router = useRouter();

    const handleDelete = async () => {
        if (!confirm('Are you sure you want to delete this item? This action cannot be undone.')) {
            return;
        }

        try {
            const response = await fetch(`${endpoint}/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.refresh();
                if (redirect) {
                    // router.push(redirect);
                }
            } else {
                alert('Failed to delete item');
            }
        } catch (error) {
            alert('An error occurred');
        }
    };

    return (
        <button
            onClick={handleDelete}
            className={`${styles.actionButton} ${styles.delete}`}
            title="Delete"
        >
            <i className="fa-sharp-duotone fa-solid fa-trash"></i>
        </button>
    );
}
