'use client';
import styles from './StatsRail.module.css';

const stats = [
    { label: 'LIVES IMPACTED', value: '50K' },
    { label: 'GLOBAL MISSIONS', value: '12' },
    { label: 'COMMUNITY PARTNERS', value: '120' },
];

export default function StatsRail() {
    return (
        <section className={styles.rail}>
            {stats.map((stat, index) => (
                <div key={index} className={styles.statItem}>
                    <span className={styles.value}>{stat.value}</span>
                    <span className={styles.label}>{stat.label}</span>
                </div>
            ))}
        </section>
    );
}
