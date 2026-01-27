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

// GET all articles
export async function GET() {
    try {
        const articles = await prisma.article.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(articles);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch articles' }, { status: 500 });
    }
}

// POST create new article
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { title, subhead, content, category, tags, featureImage, published } = body;

        if (!title || !content || !category) {
            return NextResponse.json({ error: 'Title, content, and category are required' }, { status: 400 });
        }

        const slug = generateSlug(title);

        // Check if slug already exists
        const existingArticle = await prisma.article.findUnique({ where: { slug } });
        if (existingArticle) {
            return NextResponse.json({ error: 'An article with this title already exists' }, { status: 400 });
        }

        const article = await prisma.article.create({
            data: {
                title,
                slug,
                subhead: subhead || null,
                content,
                category,
                tags: tags || [],
                featureImage: featureImage || null,
                published: published || false,
                publishedAt: published ? new Date() : null,
            },
        });

        return NextResponse.json(article, { status: 201 });
    } catch (error) {
        console.error('Error creating article:', error);
        return NextResponse.json({ error: 'Failed to create article' }, { status: 500 });
    }
}
