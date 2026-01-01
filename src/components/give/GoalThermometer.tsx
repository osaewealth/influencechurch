'use client';
import styles from './GoalThermometer.module.css';

export default function GoalThermometer() {
    return (
        <div className={styles.container}>
            <h3 className={styles.label}>BUILDING FUND</h3>

            <div className={styles.barContainer}>
                <div className={styles.barFill} style={{ height: '68%' }} />
            </div>

            <div className={styles.stats}>
                <span>68% FUNDED</span>
                <span className={styles.total}>$340K of $500K</span>
            </div>
        </div>
    );
}
