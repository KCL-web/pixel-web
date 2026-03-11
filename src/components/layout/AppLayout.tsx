import Footer from './Footer/Footer';
import CookiesBanner from '@/components/CookiesBanner/CookiesBanner';
import Navbar from './Navbar/Navbar';
import type { ReactNode } from 'react';

interface AppLayoutProps {
    children: ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <main id="main-content">{children}</main>
            <CookiesBanner />
            <Footer />
        </>
    );
}
