'use client';
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './BackToTop.module.css';

export default function BackToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    if (!isVisible || pathname === '/') return null;

    return (
        <button
            className={styles.button}
            onClick={scrollToTop}
            aria-label="Back to top"
        >
            <span className={styles.arrow}>↑</span>
        </button>
    );
}
