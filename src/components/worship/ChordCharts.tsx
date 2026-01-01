'use client';
import styles from './ChordCharts.module.css';

const sounds = [
    { id: 1, title: 'Gratitude', artist: 'Brandon Lake' },
    { id: 2, title: 'Lion', artist: 'Elevation Worship' },
    { id: 3, title: 'Trust In God', artist: 'Elevation Worship' },
    { id: 4, title: 'Honey in the Rock', artist: 'Brooke Ligertwood' },
];

export default function SoundsWorthListening() {
    return (
        <section className={styles.section}>
            <h3 className={styles.title}>SOUNDS WORTH LISTENING</h3>
            <div className={styles.grid}>
                {sounds.map((sound) => (
                    <div key={sound.id} className={styles.card}>
                        <div className={styles.icon}>🔊</div>
                        <h4>{sound.title}</h4>
                        <span className={styles.artist}>{sound.artist}</span>
                        <div className={styles.actions}>
                            <button className={styles.downloadBtn}>DOWNLOAD</button>
                            <button className={styles.listenBtn}>LISTEN</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
