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

// GET single job
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const job = await prisma.jobOpening.findUnique({
            where: { id: params.id },
        });

        if (!job) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        return NextResponse.json(job);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch job' }, { status: 500 });
    }
}

// PUT update job
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
        const { title, department, location, type, description, requirements, published } = body;

        const existingJob = await prisma.jobOpening.findUnique({
            where: { id: params.id },
        });

        if (!existingJob) {
            return NextResponse.json({ error: 'Job not found' }, { status: 404 });
        }

        // Generate new slug if title changed
        let slug = existingJob.slug;
        if (title && title !== existingJob.title) {
            slug = generateSlug(title);
            // Check if new slug already exists (for a different job)
            const slugExists = await prisma.jobOpening.findFirst({
                where: { slug, id: { not: params.id } },
            });
            if (slugExists) {
                slug = `${slug}-${Date.now()}`;
            }
        }

        const job = await prisma.jobOpening.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                department,
                location,
                type,
                description,
                requirements: requirements || null,
                published: published || false,
                publishedAt: published && !existingJob.published ? new Date() : existingJob.publishedAt,
            },
        });

        return NextResponse.json(job);
    } catch (error) {
        console.error('Error updating job:', error);
        return NextResponse.json({ error: 'Failed to update job' }, { status: 500 });
    }
}

// DELETE job
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session) {
            return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
        }

        await prisma.jobOpening.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete job' }, { status: 500 });
    }
}
