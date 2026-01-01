'use client';
import styles from './GlobalGlobe.module.css';

const impactStats = [
    { label: 'GLOBAL MISSIONS', value: '12+' },
    { label: 'LOCAL OUTREACHES', value: '150+' },
    { label: 'VOLUNTEERS ACTIVE', value: '500+' },
    { label: 'LIVES TRANSFORMED', value: '10K+' }
];

export default function GlobalGlobe() {
    return (
        <section className={styles.container}>
            <div className="container">
                <h1 className={styles.headline}>GLOBAL<br /><span style={{ color: 'var(--color-gold)' }}>IMPACT.</span></h1>

                <div className={styles.impactGrid}>
                    {impactStats.map((stat, index) => (
                        <div key={index} className={styles.impactCell}>
                            <span className={styles.impactValue}>{stat.value}</span>
                            <span className={styles.impactLabel}>{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
