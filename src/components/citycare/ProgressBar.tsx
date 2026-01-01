'use client';
import styles from './ProgressBar.module.css';

interface ProgressBarProps {
    progress: number;
}

export default function ProgressBar({ progress }: ProgressBarProps) {
    return (
        <div className={styles.container}>
            <div className={styles.track}>
                <div className={styles.fill} style={{ width: `${progress}%` }} />
            </div>
            <div className={styles.percentage}>{progress}% FUNDED</div>
        </div>
    );
}
