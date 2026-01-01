import LyricVideo from '@/components/worship/LyricVideo';
import Waveform from '@/components/worship/Waveform';
import ChordCharts from '@/components/worship/ChordCharts';

export default function WorshipPage() {
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
                    THE<br /><span style={{ color: 'var(--color-gold)' }}>SOUND.</span>
                </h1>

                <Waveform />
                <LyricVideo />
                <ChordCharts />
            </div>
        </main>
    );
}
