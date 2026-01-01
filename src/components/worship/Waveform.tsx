'use client';
import styles from './Waveform.module.css';

export default function Waveform() {
    return (
        <div className={styles.container}>
            {/* CSS Animation Bars instead of WebGL */}
            <div className={styles.bars}>
                {[...Array(20)].map((_, i) => (
                    <div key={i} className={styles.bar} style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
            </div>
        </div>
    );
}
