'use client';
import { useEffect, useState } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>INFLUENCE CITY CHURCH</div>

            <div className={styles.connectSection}>
                <h3 className={styles.stayConnected}>STAY CONNECTED</h3>
                <div className={styles.contactGrid}>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>EMAIL</span>
                        <a href="mailto:influencecity1020@gmail.com" className={styles.value}>influencecity1020@gmail.com</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>PHONE</span>
                        <a href="tel:07958193735" className={styles.value}>07958193735</a>
                    </div>
                    <div className={styles.contactItem}>
                        <span className={styles.label}>FACEBOOK</span>
                        <a href="https://m.facebook.com/influencecity" target="_blank" rel="noopener noreferrer" className={styles.value}>@influencecity</a>
                    </div>
                </div>
            </div>

            <p className={styles.tagline}>A CHURCH WITHOUT LIMITS.</p>
            <p className={styles.copyright}>© {mounted ? new Date().getFullYear() : '2026'} Influence City Church. All rights reserved.</p>
        </footer>
    );
}
