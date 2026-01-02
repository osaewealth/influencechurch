'use client';
import { useState } from 'react';
import styles from './PrayerForm.module.css';

export default function PrayerForm() {
    const [request, setRequest] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent('Prayer Request Submission');
        const body = encodeURIComponent(`Prayer Request:\n\n${request}`);
        window.location.href = `mailto:influencecity1020@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>SUBMIT A PRAYER REQUEST</h2>
            <form className={styles.formContainer} onSubmit={handleSubmit}>
                <textarea
                    placeholder="Share your prayer request with us..."
                    className={styles.textarea}
                    value={request}
                    onChange={(e) => setRequest(e.target.value)}
                    required
                />

                <button className={styles.submitBtn} type="submit">
                    SUBMIT REQUEST
                </button>

                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-medium)', marginTop: '1rem', textAlign: 'center' }}>
                    Your prayer request will be shared with our prayer team
                </p>
            </form>
        </section>
    );
}
