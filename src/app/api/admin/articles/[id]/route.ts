import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import prisma from '@/lib/prisma';
import { authOptions } from '@/lib/auth';

function generateSlug(title: string): string {
    return title
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
}

// GET single article
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const article = await prisma.article.findUnique({
            where: { id: params.id },
        });

        if (!article) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        return NextResponse.json(article);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch article' }, { status: 500 });
    }
}

// PUT update article
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { title, subhead, content, category, tags, featureImage, published } = body;

        const existingArticle = await prisma.article.findUnique({
            where: { id: params.id },
        });

        if (!existingArticle) {
            return NextResponse.json({ error: 'Article not found' }, { status: 404 });
        }

        // Generate new slug if title changed
        let slug = existingArticle.slug;
        if (title && title !== existingArticle.title) {
            slug = generateSlug(title);
            // Check if new slug already exists (for a different article)
            const slugExists = await prisma.article.findFirst({
                where: { slug, id: { not: params.id } },
            });
            if (slugExists) {
                slug = `${slug}-${Date.now()}`;
            }
        }

        const article = await prisma.article.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                subhead: subhead || null,
                content,
                category,
                tags: tags || [],
                featureImage: featureImage || null,
                published: published || false,
                publishedAt: published && !existingArticle.published ? new Date() : existingArticle.publishedAt,
            },
        });

        return NextResponse.json(article);
    } catch (error) {
        console.error('Error updating article:', error);
        return NextResponse.json({ error: 'Failed to update article' }, { status: 500 });
    }
}

// DELETE article
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await prisma.article.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete article' }, { status: 500 });
    }
}
