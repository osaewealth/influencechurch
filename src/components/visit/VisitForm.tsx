'use client';
import { useState } from 'react';
import styles from './VisitForm.module.css';

export default function VisitForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const subject = encodeURIComponent(`Plan Your Visit - ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Expected Date: ${formData.date}\n\n` +
            `Message:\n${formData.message}`
        );

        const mailtoLink = `mailto:influencecity1020@gmail.com?subject=${subject}&body=${body}`;

        // Open the user's email client
        window.location.href = mailtoLink;
    };

    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>PLAN YOUR<br /><span style={{ color: 'var(--color-gold)' }}>VISIT.</span></h1>

                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.field}>
                            <label className={styles.label}>FULL NAME</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your Name"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>EMAIL ADDRESS</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Email@example.com"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>PHONE NUMBER</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Your Phone Number"
                                required
                            />
                        </div>

                        <div className={styles.field}>
                            <label className={styles.label}>EXPECTED VISIT DATE</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                className={styles.input}
                                required
                            />
                        </div>

                        <div className={`${styles.field} ${styles.fullWidth}`}>
                            <label className={styles.label}>MESSAGE / SPECIAL REQUIREMENTS</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Tell us more about your visit..."
                            />
                        </div>

                        <button type="submit" className={styles.button}>SEND REQUEST</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
