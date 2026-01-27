import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import JobEditForm from './JobEditForm';

async function getJob(id: string) {
    const job = await prisma.jobOpening.findUnique({
        where: { id },
    });
    return job;
}

export default async function EditJobPage({ params }: { params: { id: string } }) {
    const job = await getJob(params.id);

    if (!job) {
        notFound();
    }

    return <JobEditForm job={job} />;
}
