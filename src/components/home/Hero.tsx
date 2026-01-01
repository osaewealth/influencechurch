'use client';
import styles from './Hero.module.css';
import Link from 'next/link';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1 className={styles.headline}>
                    <span className={styles.mainText}>A CHURCH</span>
                    <span className={styles.mainText} style={{ color: 'var(--color-gold)' }}>WITHOUT LIMITS.</span>
                </h1>
                <p className={styles.subheadline}>
                    Experience a community driven by faith, fueled by purpose, and dedicated to transforming lives.
                    Join us this Sunday at 10:00 AM.
                </p>

                <div className={styles.cta}>
                    <Link href="/visit" className="btn">PLAN YOUR VISIT</Link>
                    <Link href="/worship" className="btn btn-white">WATCH LIVE</Link>
                </div>
            </div>
        </section>
    );
}
