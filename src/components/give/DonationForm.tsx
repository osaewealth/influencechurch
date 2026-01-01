'use client';
import { useState } from 'react';
import styles from './DonationForm.module.css';

export default function DonationForm() {
    const [amount, setAmount] = useState('');
    const [currency, setCurrency] = useState('USD');
    const [isRecurring, setIsRecurring] = useState(false);

    return (
        <div className={styles.card}>
            <h2 className={styles.title}>Make a Donation</h2>

            <div className={styles.inputGroup}>
                <select
                    value={currency}
                    onChange={(e) => setCurrency(e.target.value)}
                    className={styles.select}
                >
                    <option value="USD">USD ($)</option>
                    <option value="EUR">EUR (€)</option>
                    <option value="GBP">GBP (£)</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="0.00"
                    className={styles.input}
                />
            </div>

            <div className={styles.toggles}>
                <label className={styles.checkboxLabel}>
                    <input
                        type="checkbox"
                        checked={isRecurring}
                        onChange={(e) => setIsRecurring(e.target.checked)}
                    />
                    <span>Make this a monthly donation</span>
                </label>
            </div>

            {isRecurring && (
                <div className={styles.panel}>
                    <p>Thank you for choosing to give monthly! Your recurring donation will help us plan and budget for ministry throughout the year.</p>
                </div>
            )}

            <button className={styles.button}>Submit Donation</button>
        </div>
    );
}
