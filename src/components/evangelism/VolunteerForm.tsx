'use client';
import { useState } from 'react';
import styles from './VolunteerForm.module.css';

export default function VolunteerForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        ministry: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const subject = encodeURIComponent(`Volunteer Application - ${formData.name}`);
        const body = encodeURIComponent(
            `Name: ${formData.name}\n` +
            `Email: ${formData.email}\n` +
            `Phone: ${formData.phone}\n` +
            `Ministry Interest: ${formData.ministry}`
        );
        window.location.href = `mailto:influencecity1020@gmail.com?subject=${subject}&body=${body}`;
    };

    return (
        <section className={styles.section}>
            <h2 className={styles.title}>GET INVOLVED</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className={styles.input}
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className={styles.input}
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className={styles.input}
                    value={formData.phone}
                    onChange={handleChange}
                />
                <select
                    name="ministry"
                    className={styles.input}
                    value={formData.ministry}
                    onChange={handleChange}
                    required
                >
                    <option value="">Select Ministry Interest</option>
                    <option value="worship">Worship Team</option>
                    <option value="youth">Youth Ministry</option>
                    <option value="children">Children's Church</option>
                    <option value="outreach">Community Outreach</option>
                </select>
                <button className={styles.button} type="submit">SUBMIT</button>
            </form>
        </section>
    );
}
