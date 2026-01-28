import TestimonialForm from '../TestimonialForm';
import styles from '../../admin.module.css';

export default function NewTestimonialPage() {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>New Testimonial</h1>
            <TestimonialForm />
        </div>
    );
}
