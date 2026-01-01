'use client';
import styles from './Calendly.module.css';

export default function Calendly() {
    return (
        <section className={styles.container}>
            <h2 className={styles.title}>1-ON-1 PRAYER</h2>
            <p className={styles.text}>
                Need to speak with a prayer partner? Schedule a private 15-minute
                session with our dedicated prayer team.
            </p>
            <button className={styles.btn}>SCHEDULE SESSION</button>
        </section>
    );
}
