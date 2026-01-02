'use client';
import styles from './GoalThermometer.module.css';

export default function GoalThermometer() {
    return (
        <div className={styles.container}>
            <h3 className={styles.label}>BUILDING FUND</h3>

            <div className={styles.barContainer}>
                <div className={styles.barFill} style={{ height: '0.15%' } as any} />
            </div>

            <div className={styles.stats}>
                <span>0.15% FUNDED</span>
                <span className={styles.total}>£150 of £100K</span>
            </div>
        </div>
    );
}
