import Gallery from '@/components/citycare/Gallery';
import ProgressBar from '@/components/citycare/ProgressBar';
import InKindDonation from '@/components/citycare/InKindDonation';

export default function CityCarePage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '120px', background: 'var(--bg-primary)' }}>
            <div className="container">
                <h1 style={{
                    fontSize: 'clamp(4rem, 12vw, 9rem)',
                    color: 'var(--text-primary)',
                    lineHeight: '0.9',
                    marginBottom: '4rem',
                    borderLeft: '16px solid var(--color-gold)',
                    paddingLeft: '2.5rem'
                }}>
                    CITY<br /><span style={{ color: 'var(--color-gold)' }}>CARE.</span>
                </h1>

                <div style={{ marginBottom: '8rem', maxWidth: '800px' }}>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>FOOD BANK PROJECT: PHASE 01</h3>
                    <ProgressBar progress={75} />
                    <p style={{ marginTop: '2rem', fontSize: '1.25rem', opacity: 0.8, color: 'var(--text-primary)' }}>
                        We are building a center of compassion. Our goal is to secure 10,000 monthly
                        sustenance points for families in need. Join the movement.
                    </p>
                </div>

                <Gallery />
                <InKindDonation />
            </div>
        </main>
    );
}
