import PrayerForm from '@/components/prayer/PrayerForm';
import PrayerWall from '@/components/prayer/PrayerWall';
import Calendly from '@/components/prayer/Calendly';

export default function PrayerPage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '120px', background: 'var(--color-black)' }}>
            <div className="container">
                <h1 style={{
                    fontSize: 'clamp(4rem, 12vw, 9rem)',
                    color: 'var(--color-white)',
                    lineHeight: '0.9',
                    marginBottom: '4rem',
                    borderLeft: '16px solid var(--color-gold)',
                    paddingLeft: '2.5rem'
                }}>
                    THE<br /><span style={{ color: 'var(--color-gold)' }}>WALL.</span>
                </h1>

                <PrayerForm />
                <PrayerWall />
                <Calendly />
            </div>
        </main>
    );
}
