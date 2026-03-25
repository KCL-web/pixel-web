import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Menu, X } from 'lucide-react';
import { Button } from '@components/ui/Button/Button';
import Logo from '@/components/ui/Logo/Logo';

import styles from './Navbar.module.scss';

const navLinks = [
    { label: 'Início', href: '/' },
    { label: 'Sobre nós', href: '/#sobre' },
    { label: 'Serviços', href: '#servicos' },
    { label: 'Contato', href: '/#contato' },
];

const Navbar = () => {
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();

    const isActive = (href: string) => location.pathname === href;

    const closeMenu = () => setMobileOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <nav
                    className={styles.leftNav}
                    aria-label="Navegação principal"
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={`${styles.navLink} ${
                                isActive(link.href) ? styles.active : ''
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                <Link
                    to="/"
                    aria-label="Ir para página inicial"
                    className={styles.logo}
                >
                    <Logo size="medium" />
                </Link>
                <div className={styles.right}>
                    <Link to="/contato" className={styles.desktopCta}>
                        <Button variant="default">
                            Falar com especialista
                        </Button>
                    </Link>

                    <button
                        className={styles.mobileToggle}
                        onClick={() => setMobileOpen(true)}
                        aria-label="Abrir menu"
                        aria-controls="mobile-menu"
                        aria-expanded={mobileOpen}
                    >
                        <Menu size={26} />
                    </button>
                </div>
            </div>
            <div
                id="mobile-menu"
                className={`${styles.mobileMenu} ${
                    mobileOpen ? styles.open : ''
                }`}
            >
                <div className={styles.mobileHeader}>
                    <button
                        className={styles.mobileClose}
                        onClick={closeMenu}
                        aria-label="Fechar menu"
                    >
                        <X size={26} />
                    </button>
                </div>

                <nav className={styles.mobileNav} aria-label="Menu mobile">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={closeMenu}
                            className={`${styles.mobileLink} ${
                                isActive(link.href) ? styles.active : ''
                            }`}
                        >
                            {link.label}
                        </a>
                    ))}

                    <Link to="#contato" onClick={closeMenu}>
                        <Button className={styles.mobileCta}>
                            Falar com especialista
                        </Button>
                    </Link>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
