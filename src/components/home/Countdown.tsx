'use client';
import styles from './Countdown.module.css';
import { useEffect, useState } from 'react';

export default function Countdown() {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const calculateTimeLeft = () => {
            const now = new Date();
            const dayOfWeek = now.getDay(); // 0 = Sunday, 6 = Saturday
            const currentHour = now.getHours();

            let targetDate = new Date(now);

            if (dayOfWeek === 0 && currentHour < 10) {
                // It's Sunday before 10 AM
                targetDate.setHours(10, 0, 0, 0);
            } else {
                // Set to next Sunday at 10 AM
                const daysUntilSunday = dayOfWeek === 0 ? 7 : 7 - dayOfWeek;
                targetDate.setDate(now.getDate() + daysUntilSunday);
                targetDate.setHours(10, 0, 0, 0);
            }

            const difference = targetDate.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60)
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className={styles.container}>
            <p className={styles.label}>NEXT SERVICE IN</p>

            <div className={styles.timer}>
                <div className={styles.unit}>
                    <span className={styles.value}>{String(timeLeft.days).padStart(2, '0')}</span>
                    <span className={styles.key}>DAYS</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.unit}>
                    <span className={styles.value}>{String(timeLeft.hours).padStart(2, '0')}</span>
                    <span className={styles.key}>HOURS</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.unit}>
                    <span className={styles.value}>{String(timeLeft.minutes).padStart(2, '0')}</span>
                    <span className={styles.key}>MINUTES</span>
                </div>
                <span className={styles.separator}>:</span>
                <div className={styles.unit}>
                    <span className={styles.value}>{String(timeLeft.seconds).padStart(2, '0')}</span>
                    <span className={styles.key}>SECONDS</span>
                </div>
            </div>
        </section>
    );
}
