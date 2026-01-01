import VaultEntrance from '@/components/give/VaultEntrance';
import DonationForm from '@/components/give/DonationForm';
import GoalThermometer from '@/components/give/GoalThermometer';

export default function GivePage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <VaultEntrance />
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '2rem',
                marginTop: '4rem',
                padding: '0 var(--page-margin)'
            }}>
                <DonationForm />
                <GoalThermometer />
            </div>
        </main>
    );
}
