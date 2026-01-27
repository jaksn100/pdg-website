import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import styles from '../thinking.module.css';

async function getArticle(slug: string) {
    return prisma.article.findUnique({
        where: {
            slug,
            published: true,
        },
    });
}

function formatDate(date: Date | null): string {
    if (!date) return '';
    return new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: 'numeric',
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

function getCategoryPath(category: string): string {
    switch (category) {
        case 'INSIGHTS': return '/our-thinking/insights';
        case 'CASE_STUDIES': return '/our-thinking/case-studies';
        case 'WHITE_PAPERS': return '/our-thinking/resources';
        default: return '/our-thinking';
    }
}

export default async function ArticlePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const article = await getArticle(slug);

    if (!article) {
        notFound();
    }

    const categoryLabel = getCategoryLabel(article.category);
    const categoryPath = getCategoryPath(article.category);

    return (
        <main>
            {/* Page Hero */}
            <section className={styles.pageHero}>
                <div className={styles.pageHeroPattern}></div>
                <div className={`container ${styles.pageHeroContent}`}>
                    <div className={styles.pageBreadcrumb}>
                        <Link href="/">Home</Link>
                        <span>/</span>
                        <Link href="/our-thinking">Our Thinking</Link>
                        <span>/</span>
                        <Link href={categoryPath}>{categoryLabel}s</Link>
                        <span>/</span>
                        <span>{article.title}</span>
                    </div>
                    <span className={styles.articleDetailCategory}>{categoryLabel}</span>
                    <h1 className={styles.pageTitle}>{article.title}</h1>
                    {article.subhead && (
                        <p className={styles.pageSubtitle}>{article.subhead}</p>
                    )}
                    <div className={styles.articleDetailMeta}>
                        <span>{formatDate(article.publishedAt)}</span>
                        {article.tags.length > 0 && (
                            <>
                                <span>•</span>
                                <span>{article.tags.join(', ')}</span>
                            </>
                        )}
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <section className={styles.articleDetailSection}>
                <div className="container">
                    <div className={styles.articleDetailContent}>
                        {article.featureImage && (
                            <div className={styles.articleDetailImage}>
                                <img src={article.featureImage} alt={article.title} />
                            </div>
                        )}
                        <div
                            className={styles.articleBody}
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className={styles.ctaBanner}>
                <div className="container">
                    <h2 className={styles.ctaBannerTitle}>Want to learn more?</h2>
                    <p className={styles.ctaBannerText}>
                        Our experts are ready to discuss how these insights apply to your organization.
                    </p>
                    <div className={styles.ctaBannerActions}>
                        <Link href="/contact" className="btn btn-primary btn-lg">
                            Contact Us
                        </Link>
                        <Link href={categoryPath} className="btn btn-outline btn-lg">
                            More {categoryLabel}s
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
