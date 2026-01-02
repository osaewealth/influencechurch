'use client';
import styles from './AccountDetails.module.css';

export default function AccountDetails() {
    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Bank Transfer Info</h2>
            <div className={styles.details}>
                <div className={styles.item}>
                    <span className={styles.label}>ACCOUNT NAME</span>
                    <span className={styles.accountName}>Influence City Church</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>ACCOUNT NUMBER</span>
                    <span className={styles.value}>90559636</span>
                </div>
                <div className={styles.item}>
                    <span className={styles.label}>SORT CODE</span>
                    <span className={styles.value}>20 - 54 - 25</span>
                </div>
            </div>
            <p style={{ marginTop: '2rem', fontSize: '0.875rem', opacity: 0.7 }}>
                Please use your name as a reference when making a transfer.
            </p>
        </div>
    );
}
