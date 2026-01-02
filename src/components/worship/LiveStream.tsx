'use client';
import { useState, useEffect } from 'react';
import styles from './LiveStream.module.css';

export default function LiveStream() {
    const [platform, setPlatform] = useState<'youtube' | 'facebook'>('youtube');
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // UCZDc4_Fw2VCmuufTzmAyj_Q is the Channel ID
    // UUZDc4_Fw2VCmuufTzmAyj_Q is the Uploads Playlist ID
    const youtubeChannelId = 'UCZDc4_Fw2VCmuufTzmAyj_Q';
    const uploadsPlaylistId = 'UUZDc4_Fw2VCmuufTzmAyj_Q';

    // This will show the latest video or the live stream if currently live
    const youtubeLiveUrl = `https://www.youtube.com/embed/live_stream?channel=${youtubeChannelId}&autoplay=0&rel=0`;
    const youtubePlaylistUrl = `https://www.youtube.com/embed/videoseries?list=${uploadsPlaylistId}&autoplay=0&rel=0`;

    const facebookLiveUrl = 'https://www.facebook.com/influencecity';

    if (!mounted) return null;

    return (
        <section className={styles.section}>
            <div className={styles.header}>
                <div className={styles.titleWrapper}>
                    <div className={styles.liveIndicator}></div>
                    <h2 className={styles.title}>JOIN US LIVE</h2>
                </div>

                <div className={styles.streamSwitcher}>
                    <button
                        className={`${styles.switchBtn} ${platform === 'youtube' ? styles.switchBtnActive : ''}`}
                        onClick={() => setPlatform('youtube')}
                    >
                        YouTube
                    </button>
                    <button
                        className={`${styles.switchBtn} ${platform === 'facebook' ? styles.switchBtnActive : ''}`}
                        onClick={() => setPlatform('facebook')}
                    >
                        Facebook
                    </button>
                </div>
            </div>

            <div className={styles.videoPlayer}>
                <div className={styles.aspectRatio}>
                    {platform === 'youtube' ? (
                        <iframe
                            width="100%"
                            height="100%"
                            src={youtubePlaylistUrl}
                            title="YouTube Live Stream"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            className={styles.iframe}
                        ></iframe>
                    ) : (
                        <div className={styles.fbPlaceholder}>
                            <p>We are live on Facebook! Click the button below to join the stream directly on our page.</p>
                            <a
                                href={facebookLiveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${styles.switchBtn} ${styles.fbLink}`}
                            >
                                WATCH ON FACEBOOK
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
