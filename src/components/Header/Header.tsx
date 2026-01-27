'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';

const navigation = [
    {
        title: 'Who We Are',
        href: '/who-we-are',
        items: [
            { title: 'About', href: '/who-we-are/about', icon: 'fa-building' },
            { title: 'History', href: '/who-we-are/history', icon: 'fa-clock-rotate-left' },
            { title: 'Philosophy', href: '/who-we-are/philosophy', icon: 'fa-lightbulb' },
            { title: 'Leadership', href: '/who-we-are/leadership', icon: 'fa-users' },
            { title: 'Community', href: '/who-we-are/community', icon: 'fa-heart' },
        ],
    },
    {
        title: 'What We Do',
        href: '/what-we-do',
        columns: 2,
        items: [
            { title: 'Governance, Risk & Compliance', href: '/what-we-do/grc', icon: 'fa-shield-check' },
            { title: 'Atlassian Solutions', href: '/what-we-do/atlassian', icon: 'fa-diagram-project' },
            { title: 'Identity & Access Management', href: '/what-we-do/iam', icon: 'fa-fingerprint' },
            { title: 'eCommerce', href: '/what-we-do/ecommerce', icon: 'fa-cart-shopping' },
            { title: 'Cloud Development', href: '/what-we-do/cloud', icon: 'fa-cloud' },
            { title: 'Learning Management Systems', href: '/what-we-do/lms', icon: 'fa-graduation-cap' },
            { title: 'Content Management Systems', href: '/what-we-do/cms', icon: 'fa-file-lines' },
            { title: 'Systems Integration', href: '/what-we-do/systems-integration', icon: 'fa-gears' },
        ],
    },
    {
        title: 'Our Thinking',
        href: '/our-thinking',
        items: [
            { title: 'Insights & Thought Leadership', href: '/our-thinking/insights', icon: 'fa-lightbulb-on' },
            { title: 'Case Studies', href: '/our-thinking/case-studies', icon: 'fa-file-chart-column' },
            { title: 'White Papers & Resources', href: '/our-thinking/resources', icon: 'fa-book-open' },
        ],
    },
    {
        title: 'Clients & Impact',
        href: '/clients',
        items: [
            { title: 'Government Clients', href: '/clients/government', icon: 'fa-landmark' },
            { title: 'Corporate Clients', href: '/clients/corporate', icon: 'fa-building' },
            { title: 'Testimonials', href: '/clients/testimonials', icon: 'fa-comments' },
            { title: 'Success Metrics', href: '/clients/success-metrics', icon: 'fa-chart-line' },
        ],
    },
    {
        title: 'Careers',
        href: '/careers',
        items: [
            { title: 'Current Openings', href: '/careers/openings', icon: 'fa-briefcase' },
            { title: 'Life at PDG', href: '/careers/life-at-pdg', icon: 'fa-people-group' },
            { title: 'Culture & Values', href: '/careers/culture', icon: 'fa-stars' },
            { title: 'Career Pathways', href: '/careers/pathways', icon: 'fa-road' },
        ],
    },
];

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleDropdownToggle = (title: string) => {
        setOpenDropdown(openDropdown === title ? null : title);
    };

    return (
        <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                {/* Logo */}
                <Link href="/" className={styles.logo}>
                    <img
                        src="/pdg-logo.svg"
                        alt="Perspective Design Group"
                        className={styles.logoImage}
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className={styles.nav}>
                    {navigation.map((item) => (
                        <div
                            key={item.title}
                            className={`${styles.navItem} ${openDropdown === item.title ? styles.isOpen : ''}`}
                            onMouseEnter={() => setOpenDropdown(item.title)}
                            onMouseLeave={() => setOpenDropdown(null)}
                        >
                            <button
                                className={styles.navLink}
                                onClick={() => handleDropdownToggle(item.title)}
                            >
                                {item.title}
                                <i className="fa-sharp-duotone fa-solid fa-chevron-down"></i>
                            </button>
                            {item.items && openDropdown === item.title && (
                                <div className={`${styles.megaMenu} ${item.columns === 2 ? styles.megaMenuWide : ''}`}>
                                    <div className={styles.megaMenuContent}>
                                        {item.items.map((subItem, index) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={styles.megaMenuItem}
                                            >
                                                <i className={`fa-sharp-duotone fa-solid ${subItem.icon} ${styles.megaMenuIcon}`}></i>
                                                <span>{subItem.title}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </nav>

                {/* CTA Button */}
                <div className={styles.actions}>
                    <Link href="/contact" className={styles.ctaButton}>
                        Contact Us
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={styles.mobileToggle}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label="Toggle mobile menu"
                >
                    <i className={`fa-sharp-duotone fa-solid ${mobileMenuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
                </button>

                {/* Mobile Navigation */}
                {mobileMenuOpen && (
                    <div className={styles.mobileMenu}>
                        {navigation.map((item) => (
                            <div key={item.title} className={styles.mobileNavItem}>
                                <button
                                    className={`${styles.mobileNavLink} ${openDropdown === item.title ? styles.isOpen : ''}`}
                                    onClick={() => handleDropdownToggle(item.title)}
                                >
                                    {item.title}
                                    <i className="fa-sharp-duotone fa-solid fa-chevron-down"></i>
                                </button>
                                {openDropdown === item.title && item.items && (
                                    <div className={styles.mobileDropdown}>
                                        {item.items.map((subItem) => (
                                            <Link
                                                key={subItem.href}
                                                href={subItem.href}
                                                className={styles.mobileDropdownItem}
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <i className={`fa-sharp-duotone fa-solid ${subItem.icon}`}></i>
                                                {subItem.title}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <Link href="/contact" className={styles.mobileCta}>
                            Contact Us
                        </Link>
                    </div>
                )}
            </div>
        </header>
    );
}
