'use client';
import styles from './PrayerForm.module.css';

export default function PrayerForm() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SUBMIT A PRAYER REQUEST</h2>
            <div className={styles.formContainer}>
                <textarea
                    placeholder="Share your prayer request with us..."
                    className={styles.textarea}
                />

                <button className={styles.submitBtn}>
                    SUBMIT REQUEST
                </button>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-medium)', marginTop: '1rem', textAlign: 'center' }}>
                    Your prayer request will be shared with our prayer team
                </p>
            </div>
        </section>
    );
}
