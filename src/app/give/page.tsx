import VaultEntrance from '@/components/give/VaultEntrance';
import GoalThermometer from '@/components/give/GoalThermometer';
import AccountDetails from '@/components/give/AccountDetails';

export default function GivePage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <VaultEntrance />
            <div className="container" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                gap: '2rem',
                marginTop: '4rem',
                padding: '0 var(--page-margin)',
                marginBottom: '4rem'
            }}>
                <AccountDetails />
                <GoalThermometer />
            </div>
        </main>
    );
}
