import prisma from '@/lib/prisma';
import TestimonialForm from '../TestimonialForm';
import styles from '../../admin.module.css';
import { notFound } from 'next/navigation';

export default async function EditTestimonialPage({ params }: { params: { id: string } }) {
    const testimonial = await prisma.testimonial.findUnique({
        where: { id: params.id },
    });

    if (!testimonial) {
        notFound();
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Edit Testimonial</h1>
            <TestimonialForm initialData={testimonial} isEditing />
        </div>
    );
}
