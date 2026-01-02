'use client';
import { useState } from 'react';
import styles from './Waveform.module.css';

export default function Waveform() {
    const [isPlaying, setIsPlaying] = useState(false);
    const videoId = '7Cr59xurau0';

    return (
        <div className={styles.container}>
            {/* Hidden YouTube Iframe for Audio */}
            <div className={styles.videoWrapper}>
                {isPlaying && (
                    <iframe
                        width="1"
                        height="1"
                        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&iv_load_policy=3&disablekb=1`}
                        title="Background Music"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        className={styles.iframe}
                    ></iframe>
                )}
            </div>

            {/* CSS Animation Bars - Always animating but subtly reactive */}
            <div className={styles.bars}>
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className={`${styles.bar} ${isPlaying ? styles.active : styles.idle}`}
                        style={{ animationDelay: `${i * 0.1}s` }}
                    />
                ))}
            </div>

            {/* Small Discrete Controls */}
            <div className={styles.controls}>
                <button
                    className={styles.smallPlayBtn}
                    onClick={() => setIsPlaying(!isPlaying)}
                    title={isPlaying ? "Stop Music" : "Start Music"}
                >
                    {isPlaying ? (
                        <span className={styles.stopIcon}>■</span>
                    ) : (
                        <span className={styles.playIcon}>▶</span>
                    )}
                </button>
                <span className={styles.statusText}>
                    {isPlaying ? 'SOUND ON' : 'SOUND OFF'}
                </span>
            </div>
        </div>
    );
}



