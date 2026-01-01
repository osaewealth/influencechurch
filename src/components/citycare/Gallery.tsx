'use client';
import Image from 'next/image';
import styles from './Gallery.module.css';

// Importing photos from src/photos as requested
import photo1 from '@/photos/hb.jpeg';
import photo2 from '@/photos/hc.jpg';
import photo3 from '@/photos/hu.jpg';

const photos = [
    { src: photo1, label: 'DISTRIBUTION HUB' },
    { src: photo2, label: 'COMMUNITY IMPACT' },
    { src: photo3, label: 'SUSTENANCE TEAM' }
];

export default function Gallery() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>PROJECT MOMENTS</h2>
            <div className={styles.grid}>
                {photos.map((photo, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.imageWrapper}>
                            <Image
                                src={photo.src}
                                alt={photo.label}
                                fill
                                style={{ objectFit: 'cover' }}
                                className={styles.image}
                            />
                        </div>
                        <div className={styles.overlay}>
                            <span className={styles.label}>{photo.label}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
