import GlobalGlobe from '@/components/evangelism/GlobalGlobe';
import TestimonyCarousel from '@/components/evangelism/TestimonyCarousel';
import VolunteerForm from '@/components/evangelism/VolunteerForm';

export default function EvangelismPage() {
    return (
        <main style={{ minHeight: '100vh', paddingTop: '100px' }}>
            <GlobalGlobe />
            <div className="container">
                <TestimonyCarousel />
                <VolunteerForm />
            </div>
        </main>
    );
}
