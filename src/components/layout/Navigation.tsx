'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [theme, setTheme] = useState('dark');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem('theme') || 'dark';
        setTheme(savedTheme);
        document.documentElement.setAttribute('data-theme', savedTheme);
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    };

    const links = [
        { href: '/', label: 'HOME' },
        { href: '/give', label: 'GIVE' },
        { href: '/evangelism', label: 'EVANGELISM' },
        { href: '/citycare', label: 'CITY CARE' },
        { href: '/worship', label: 'WORSHIP' },
        { href: '/prayer', label: 'PRAYER' },
        { href: '/visit', label: 'VISIT' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/" onClick={() => setIsMenuOpen(false)}>INFLUENCE CITY CHURCH</Link>
            </div>

            <button
                className={`${styles.burger} ${isMenuOpen ? styles.burgerActive : ''}`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`${styles.links} ${isMenuOpen ? styles.linksOpen : ''}`}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={styles.link}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle Theme"
                >
                    {mounted ? (theme === 'dark' ? 'LIGHT' : 'DARK') : '...'}
                </button>
            </div>

            {isMenuOpen && <div className={styles.overlay} onClick={() => setIsMenuOpen(false)} />}
        </nav>
    );
}
