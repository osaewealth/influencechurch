'use client';
import styles from './LyricVideo.module.css';

export default function LyricVideo() {
    return (
        <section className={styles.section}>
            <h3 className={styles.nowPlaying}>NOW PLAYING: GRATITUDE - BRANDON LAKE</h3>
            <div className={styles.videoPlayer}>
                <div className={styles.aspectRatio}>
                    <iframe
                        width="100%"
                        height="100%"
                        src="https://www.youtube.com/embed/C9Ul0DeN9e0?autoplay=0&rel=0"
                        title="Worship Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                        className={styles.iframe}
                    ></iframe>
                </div>
            </div>
        </section>
    );
}
