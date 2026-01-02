'use client';
import styles from './LyricVideo.module.css';

const RECENT_VIDEOS = [
    {
        id: 'DJy8ryEJmtQ',
        title: 'Trusting God in the midst of the storm'
    },
    {
        id: 'dkyAKA5LEIg',
        title: 'Divine Fruitfulness - Abide in Me'
    },
    {
        id: 'hSa98YOPAts',
        title: 'Divine Fruitfulness Continuation'
    }
];

export default function LyricVideo() {
    return (
        <section className={styles.section}>
            <h3 className={styles.nowPlaying}>RECENT TEACHINGS</h3>
            <div className={styles.videoGrid}>
                {RECENT_VIDEOS.map((video) => (
                    <div key={video.id} className={styles.videoCard}>
                        <div className={styles.aspectRatio}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={`https://www.youtube.com/embed/${video.id}?autoplay=0&rel=0`}
                                title={video.title}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                className={styles.iframe}
                            ></iframe>
                        </div>
                        <p className={styles.videoTitle}>{video.title}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
