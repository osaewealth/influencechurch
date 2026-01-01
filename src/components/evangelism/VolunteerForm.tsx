'use client';
import styles from './VolunteerForm.module.css';

export default function VolunteerForm() {
    return (
        <section className={styles.section}>
            <h2 className={styles.title}>GET INVOLVED</h2>
            <form className={styles.form}>
                <input type="text" placeholder="Full Name" className={styles.input} required />
                <input type="email" placeholder="Email Address" className={styles.input} required />
                <input type="tel" placeholder="Phone Number" className={styles.input} />
                <select className={styles.input} required>
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
