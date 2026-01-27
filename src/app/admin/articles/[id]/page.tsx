import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import ArticleEditForm from './ArticleEditForm';

async function getArticle(id: string) {
    const article = await prisma.article.findUnique({
        where: { id },
    });
    return article;
}

export default async function EditArticlePage({ params }: { params: { id: string } }) {
    const article = await getArticle(params.id);

    if (!article) {
        notFound();
    }

    return <ArticleEditForm article={article} />;
}
