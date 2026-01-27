import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import prisma from '@/lib/prisma';
import ApplicationForm from '../ApplicationForm';
import styles from '../apply.module.css';

async function getJob(slug: string) {
    return prisma.jobOpening.findUnique({
        where: { slug },
        select: { id: true, title: true }
    });
}

export default async function ApplyPage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const job = await getJob(slug);

    if (!job) {
        notFound();
    }

    return (
        <>
            <Header />
            <main>
                <section className={styles.pageHero}>
                    <div className={styles.pageHeroPattern}></div>
                    <div className={`container ${styles.pageHeroContent}`}>
                        <h1 className={styles.pageTitle}>Apply for {job.title}</h1>
                        <p className={styles.pageSubtitle}>
                            Tell us a bit about yourself and why you'd be a great fit for the team.
                        </p>
                    </div>
                </section>

                <section className={styles.formSection}>
                    <div className="container">
                        <ApplicationForm jobTitle={job.title} jobId={job.id} />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
