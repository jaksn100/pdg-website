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

// GET all jobs
export async function GET() {
    try {
        const jobs = await prisma.jobOpening.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(jobs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch jobs' }, { status: 500 });
    }
}

// POST create new job
export async function POST(request: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        const body = await request.json();
        const { title, department, location, type, description, requirements, published } = body;

        if (!title || !department || !location || !type || !description) {
            return NextResponse.json({ error: 'Title, department, location, type, and description are required' }, { status: 400 });
        }

        const slug = generateSlug(title);

        // Check if slug already exists
        const existingJob = await prisma.jobOpening.findUnique({ where: { slug } });
        if (existingJob) {
            return NextResponse.json({ error: 'A job with this title already exists' }, { status: 400 });
        }

        const job = await prisma.jobOpening.create({
            data: {
                title,
                slug,
                department,
                location,
                type,
                description,
                requirements: requirements || null,
                published: published || false,
                publishedAt: published ? new Date() : null,
            },
        });

        return NextResponse.json(job, { status: 201 });
    } catch (error) {
        console.error('Error creating job:', error);
        return NextResponse.json({ error: 'Failed to create job' }, { status: 500 });
    }
}
