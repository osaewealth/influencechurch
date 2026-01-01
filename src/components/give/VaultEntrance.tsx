'use client';
import styles from './VaultEntrance.module.css';

export default function VaultEntrance() {
    return (
        <section className={styles.section}>
            <div className="container">
                <h1 className={styles.title}>FUEL THE<br /><span style={{ color: 'var(--color-gold)' }}>MISSION.</span></h1>
                <div className={styles.content}>
                    <p className={styles.text}>
                        We aren't just building a church. We're building a movement.
                        Your partnership drives global transformation and local impact.
                    </p>
                </div>
            </div>
        </section>
    );
}
