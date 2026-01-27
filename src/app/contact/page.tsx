import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Link from 'next/link';
import styles from './contact.module.css';

export default function ContactPage() {
    return (
        <>
            <Header />
            <main>
                {/* Page Hero */}
                <section className={styles.pageHero}>
                    <div className={styles.pageHeroPattern}></div>
                    <div className={`container ${styles.pageHeroContent}`}>
                        <div className={styles.pageBreadcrumb}>
                            <Link href="/">Home</Link>
                            <span>/</span>
                            <span>Contact</span>
                        </div>
                        <h1 className={styles.pageTitle}>Let's Start a Conversation</h1>
                        <p className={styles.pageSubtitle}>
                            Ready to discuss how PDG can help your organization?
                            We'd love to hear from you.
                        </p>
                    </div>
                </section>

                {/* Contact Section */}
                <section className={styles.contactSection}>
                    <div className="container">
                        <div className={styles.contactGrid}>
                            {/* Contact Form */}
                            <div className={styles.formContainer}>
                                <h2 className={styles.formTitle}>Send Us a Message</h2>
                                <form className={styles.form}>
                                    <div className={styles.formRow}>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="firstName">First Name *</label>
                                            <input
                                                type="text"
                                                id="firstName"
                                                name="firstName"
                                                required
                                                placeholder="First name"
                                            />
                                        </div>
                                        <div className={styles.formGroup}>
                                            <label htmlFor="lastName">Last Name *</label>
                                            <input
                                                type="text"
                                                id="lastName"
                                                name="lastName"
                                                required
                                                placeholder="Last name"
                                            />
                                        </div>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="email">Email Address *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="your@email.com"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="organization">Organization</label>
                                        <input
                                            type="text"
                                            id="organization"
                                            name="organization"
                                            placeholder="Your organization"
                                        />
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="subject">Subject *</label>
                                        <select id="subject" name="subject" required>
                                            <option value="">Select a topic</option>
                                            <option value="services">Service Inquiry</option>
                                            <option value="partnership">Partnership Opportunity</option>
                                            <option value="careers">Career Inquiry</option>
                                            <option value="general">General Question</option>
                                        </select>
                                    </div>
                                    <div className={styles.formGroup}>
                                        <label htmlFor="message">Message *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={5}
                                            placeholder="How can we help you?"
                                        ></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Send Message
                                        <i className="fa-sharp-duotone fa-solid fa-paper-plane"></i>
                                    </button>
                                </form>
                            </div>

                            {/* Contact Info */}
                            <div className={styles.infoContainer}>
                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Get in Touch</h3>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <i className="fa-sharp-duotone fa-solid fa-envelope"></i>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Email</span>
                                            <a href="mailto:info@pdg.com" className={styles.infoValue}>
                                                info@pdg.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <i className="fa-sharp-duotone fa-solid fa-phone"></i>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Phone</span>
                                            <a href="tel:+16145551234" className={styles.infoValue}>
                                                (614) 555-1234
                                            </a>
                                        </div>
                                    </div>
                                    <div className={styles.infoItem}>
                                        <div className={styles.infoIcon}>
                                            <i className="fa-sharp-duotone fa-solid fa-location-dot"></i>
                                        </div>
                                        <div>
                                            <span className={styles.infoLabel}>Location</span>
                                            <span className={styles.infoValue}>Columbus, Ohio</span>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Connect With Us</h3>
                                    <div className={styles.socialLinks}>
                                        <a
                                            href="https://linkedin.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                        >
                                            <i className="fa-sharp-duotone fa-brands fa-linkedin-in"></i>
                                        </a>
                                        <a
                                            href="https://x.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.socialLink}
                                        >
                                            <i className="fa-sharp-duotone fa-brands fa-x-twitter"></i>
                                        </a>
                                    </div>
                                </div>

                                <div className={styles.infoCard}>
                                    <h3 className={styles.infoTitle}>Looking for a career?</h3>
                                    <p className={styles.infoText}>
                                        We're always looking for talented professionals to join our team.
                                    </p>
                                    <Link href="/careers" className="btn btn-secondary">
                                        View Open Positions
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
