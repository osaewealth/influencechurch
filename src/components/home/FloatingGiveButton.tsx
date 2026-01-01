'use client';
import Link from 'next/link';
import styles from './FloatingGiveButton.module.css';

export default function FloatingGiveButton() {
    return (
        <Link href="/give" className={styles.button}>
            GIVE
        </Link>
    );
}
