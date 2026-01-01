'use client';
import styles from './PrayerWall.module.css';

const prayers = [
    { id: 1, category: 'Healing', text: 'Praying for complete healing and recovery' },
    { id: 2, category: 'Guidance', text: 'Seeking God\'s direction for my career path' },
    { id: 3, category: 'Family', text: 'Prayers for family unity and peace' },
    { id: 4, category: 'Provision', text: 'Trusting God for financial breakthrough' },
];

export default function PrayerWall() {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>PRAYER WALL</h3>
            <div className={styles.wall}>
                {prayers.map((prayer) => (
                    <div key={prayer.id} className={styles.card}>
                        <span className={styles.category}>{prayer.category}</span>
                        <p>"{prayer.text}"</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
