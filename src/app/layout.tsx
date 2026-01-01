import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import BackToTop from '@/components/ui/BackToTop';
import './globals.css';

export const metadata = {
    title: 'Influence City Church',
    description: 'Join us every Sunday as we worship together and grow in faith',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
                <BackToTop />
                <Footer />
            </body>
        </html>
    );
}
