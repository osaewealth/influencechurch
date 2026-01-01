'use client';
import { useState } from 'react';
import styles from './InKindDonation.module.css';

const items = ['Canned Goods', 'Clothing', 'Furniture'];

export default function InKindDonation() {
    const [selectedItem, setSelectedItem] = useState<string | null>(null);

    const handleWhatsApp = () => {
        const phone = '447958193735'; // Formatted with country code
        const message = encodeURIComponent(`Hi Influence City, I'd like to coordinate an in-kind donation of ${selectedItem || 'items'}!`);
        window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
    };

    return (
        <section className={styles.section}>
            <div className={styles.left}>
                <h2 className={styles.title}>IN-KIND GIVING</h2>
                <div className={styles.items}>
                    {items.map((item) => (
                        <button
                            key={item}
                            className={`${styles.itemBtn} ${selectedItem === item ? styles.active : ''}`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {selectedItem && (
                    <div className={styles.preview}>
                        <div className={styles.boxLabel}>{selectedItem} Box</div>
                    </div>
                )}
            </div>

            <div className={styles.right}>
                <div className={styles.card}>
                    <h3>COORDINATE DROP-OFF</h3>
                    <p>Ready to donate {selectedItem || 'items'}?</p>
                    <button
                        className={styles.whatsappBtn}
                        onClick={handleWhatsApp}
                    >
                        Start WhatsApp Chat
                    </button>
                </div>
            </div>
        </section>
    );
}
