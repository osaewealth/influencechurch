import VaultEntrance from '@/components/give/VaultEntrance';
import DonationForm from '@/components/give/DonationForm';
import GoalThermometer from '@/components/give/GoalThermometer';

export default function GivePage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <VaultEntrance />
            <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '4rem' }}>
                <DonationForm />
                <GoalThermometer />
            </div>
        </main>
    );
}
