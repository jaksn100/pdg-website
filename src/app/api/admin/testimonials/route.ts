import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';

export async function GET() {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const testimonials = await prisma.testimonial.findMany({
            orderBy: { createdAt: 'desc' },
        });
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}

export async function POST(req: Request) {
    const session = await getServerSession(authOptions);
    if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    try {
        const data = await req.json();
        const testimonial = await prisma.testimonial.create({
            data: {
                author: data.author,
                company: data.company,
                quote: data.quote,
                service: data.service,
                featured: data.featured,
            },
        });
        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}
