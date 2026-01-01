'use client';
import { useState } from 'react';
import styles from './TestimonyCarousel.module.css';

const testimonies = [
    { id: 1, name: 'Sarah M.', text: 'This church has been a blessing to my family. The community is warm and welcoming.' },
    { id: 2, name: 'Michael R.', text: 'I found my purpose here. The Bible studies have deepened my faith tremendously.' },
    { id: 3, name: 'Jennifer K.', text: 'The youth ministry has been incredible for our teenagers. Thank you!' },
];

export default function TestimonyCarousel() {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % testimonies.length);

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>TESTIMONIES</h2>
            <div className={styles.card}>
                <p className={styles.text}>"{testimonies[index].text}"</p>
                <span className={styles.name}>— {testimonies[index].name}</span>
                <button onClick={next} className={styles.btn}>Next Testimony</button>
            </div>
        </section>
    );
}
