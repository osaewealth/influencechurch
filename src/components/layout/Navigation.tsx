'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Navigation.module.css';

export default function Navigation() {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
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
        { href: '/give', label: 'GIVE' },
        { href: '/evangelism', label: 'EVANGELISM' },
        { href: '/citycare', label: 'CITY CARE' },
        { href: '/worship', label: 'WORSHIP' },
        { href: '/prayer', label: 'PRAYER' },
    ];

    return (
        <nav className={styles.nav}>
            <div className={styles.logo}>
                <Link href="/">INFLUENCE CITY</Link>
            </div>
            <div className={styles.links}>
                {links.map((link) => (
                    <Link key={link.href} href={link.href} className={styles.link}>
                        {link.label}
                    </Link>
                ))}
                <button
                    onClick={toggleTheme}
                    className={styles.themeToggle}
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? 'LIGHT' : 'DARK'}
                </button>
            </div>
        </nav>
    );
}
