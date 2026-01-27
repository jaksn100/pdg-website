import Link from 'next/link';
import styles from './Footer.module.css';

const footerLinks = {
    whoWeAre: [
        { title: 'About', href: '/who-we-are/about' },
        { title: 'History', href: '/who-we-are/history' },
        { title: 'Philosophy', href: '/who-we-are/philosophy' },
        { title: 'Leadership', href: '/who-we-are/leadership' },
        { title: 'Community', href: '/who-we-are/community' },
    ],
    whatWeDo: [
        { title: 'GRC', href: '/what-we-do/grc' },
        { title: 'Atlassian Solutions', href: '/what-we-do/atlassian' },
        { title: 'Identity & Access Management', href: '/what-we-do/iam' },
        { title: 'Cloud Development', href: '/what-we-do/cloud' },
        { title: 'Systems Integration', href: '/what-we-do/systems-integration' },
    ],
    company: [
        { title: 'Clients & Impact', href: '/clients' },
        { title: 'Our Thinking', href: '/our-thinking' },
        { title: 'Careers', href: '/careers' },
        { title: 'Contact', href: '/contact' },
    ],
};

const socialLinks = [
    { icon: 'fa-sharp-duotone fa-brands fa-linkedin-in', href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: 'fa-sharp-duotone fa-brands fa-x-twitter', href: 'https://twitter.com', label: 'Twitter' },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                {/* Top Section */}
                <div className={styles.top}>
                    {/* Brand Column */}
                    <div className={styles.brand}>
                        <Link href="/" className={styles.logo}>
                            <img
                                src="/pdg-logo-dark.svg"
                                alt="Perspective Design Group"
                                className={styles.logoImage}
                            />
                        </Link>
                        <p className={styles.tagline}>
                            We help organizations govern complexity, build intentional systems, and connect technology in ways that endure.
                        </p>
                        <div className={styles.social}>
                            {socialLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.socialLink}
                                    aria-label={link.label}
                                >
                                    <i className={link.icon}></i>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Columns */}
                    <div className={styles.links}>
                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Who We Are</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.whoWeAre.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>What We Do</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.whatWeDo.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className={styles.linkColumn}>
                            <h4 className={styles.linkTitle}>Company</h4>
                            <ul className={styles.linkList}>
                                {footerLinks.company.map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className={styles.link}>
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <div className={styles.divider}></div>

                {/* Bottom Section */}
                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {currentYear} Perspective Design Group. All rights reserved.
                    </p>
                    <div className={styles.legal}>
                        <Link href="/privacy" className={styles.legalLink}>
                            Privacy Policy
                        </Link>
                        <Link href="/terms" className={styles.legalLink}>
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
