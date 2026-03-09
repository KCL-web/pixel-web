import Footer from './Footer/Footer';
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
            <Footer />
        </>
    );
}
