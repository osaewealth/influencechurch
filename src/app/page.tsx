import Hero from '@/components/home/Hero';
import Countdown from '@/components/home/Countdown';
import MinistryWheel from '@/components/home/MinistryWheel';
import StatsRail from '@/components/home/StatsRail';
import FloatingGiveButton from '@/components/home/FloatingGiveButton';

export default function Home() {
    return (
        <main>
            <Hero />
            <Countdown />
            <MinistryWheel />
            <StatsRail />
            <FloatingGiveButton />
        </main>
    );
}
