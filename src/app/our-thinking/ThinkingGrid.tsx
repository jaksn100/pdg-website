'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './thinking.module.css';

type Article = {
    id: string;
    title: string;
    slug: string;
    subhead: string | null;
    featureImage: string | null;
    category: 'INSIGHTS' | 'CASE_STUDIES' | 'WHITE_PAPERS';
    publishedAt: Date | null;
    tags: string[];
};

const categories = ['All', 'Case Studies', 'Insights', 'White Papers'];

function formatDate(date: Date | null): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        year: 'numeric'
    }).format(new Date(date));
}

function getCategoryLabel(category: string): string {
    switch (category) {
        case 'INSIGHTS': return 'Insight';
        case 'CASE_STUDIES': return 'Case Study';
        case 'WHITE_PAPERS': return 'White Paper';
        default: return 'Article';
    }
}

export default function ThinkingGrid({ articles }: { articles: Article[] }) {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredArticles = articles.filter((article) => {
        if (activeFilter === 'All') return true;
        if (activeFilter === 'Insights') return article.category === 'INSIGHTS';
        if (activeFilter === 'Case Studies') return article.category === 'CASE_STUDIES';
        if (activeFilter === 'White Papers') return article.category === 'WHITE_PAPERS';
        return true;
    });

    return (
        <div className="container">
            {/* Category Filter */}
            <div className={styles.categoryFilter}>
                {categories.map((category) => (
                    <button
                        key={category}
                        className={`${styles.categoryButton} ${activeFilter === category ? styles.active : ''}`}
                        onClick={() => setActiveFilter(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Articles Grid */}
            {filteredArticles.length > 0 ? (
                <div className={styles.articlesGrid}>
                    {filteredArticles.map((article) => (
                        <Link key={article.id} href={`/our-thinking/${article.slug}`} className={styles.articleCard}>
                            <div className={styles.articleImage}>
                                {article.featureImage ? (
                                    <img src={article.featureImage} alt={article.title} />
                                ) : (
                                    <span>{getCategoryLabel(article.category)}</span>
                                )}
                            </div>
                            <div className={styles.articleContent}>
                                <span className={styles.articleCategory}>{getCategoryLabel(article.category)}</span>
                                <h3 className={styles.articleTitle}>{article.title}</h3>
                                <p className={styles.articleExcerpt}>{article.subhead}</p>
                                <div className={styles.articleMeta}>
                                    <span>{formatDate(article.publishedAt)}</span>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            ) : (
                <div className={styles.emptyState}>
                    <i className="fa-sharp-duotone fa-solid fa-filter"></i>
                    <h3>No articles found</h3>
                    <p>No content matches the selected category.</p>
                </div>
            )}
        </div>
    );
}
