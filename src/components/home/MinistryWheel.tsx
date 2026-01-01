'use client';
import styles from './MinistryWheel.module.css';
import Link from 'next/link';

const lifeTracks = [
    { title: 'SUNDAY EXPERIENCE', desc: 'Powerful worship and transformative messages.', next: 'EVERY SUNDAY @ 10AM' },
    { title: 'CITY CARE', desc: 'Mobilizing our community to serve those in need.', next: 'GET INVOLVED' },
    { title: 'IC WORSHIP', desc: 'The sound of our house. Direct and authentic.', next: 'LISTEN NOW' },
    { title: 'THE VAULT', desc: 'Partnering with us to fuel global transformation.', next: 'PARTNER' }
];

export default function MinistryWheel() {
    return (
        <section className={styles.container}>
            <h2 className={styles.headline}>CHOOSE YOUR TRACK</h2>

            <div className={styles.grid}>
                {lifeTracks.map((track, index) => (
                    <div key={index} className={styles.card}>
                        <div className={styles.cardContent}>
                            <span className={styles.number}>TRACK 0{index + 1}</span>
                            <h3 className={styles.pillarName}>{track.title}</h3>
                            <p className={styles.description}>{track.desc}</p>
                            <span className={styles.cardLink}>{track.next} →</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
