import { ChevronRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import styles from './Footer.module.scss';
import Logo from '@/components/Logo/Logo';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.content}>
                    <nav className={styles.column} aria-label="Serviços">
                        <h3>Serviços</h3>
                        <ul>
                            <li>
                                <a href="/implantacao-vtex-io">
                                    Desenvolvimento de aplicativos
                                </a>
                            </li>
                            <li>
                                <a href="/implementacao-shopify">
                                    Análise e Desenvolvimento de websites
                                </a>
                            </li>
                            <li>
                                <a href="/suporte-evolucao">
                                    Suporte & Evolução
                                </a>
                            </li>
                            <li>
                                <a href="/app-commerce">App Commerce</a>
                            </li>
                        </ul>
                    </nav>

                    <nav className={styles.column} aria-label="Institucional">
                        <h3>PixelWeb</h3>
                        <ul>
                            <li>
                                <a href="/sobre">Sobre nós</a>
                            </li>
                            <li>
                                <a href="/contato">Contato</a>
                            </li>
                            <li>
                                <a href="/trabalhe-conosco">Nossos clientes</a>
                            </li>
                        </ul>
                    </nav>

                    <section className={styles.newsletter}>
                        <h3>Assine nossa newsletter</h3>
                        <p>
                            Assine nossa newsletter semanal para receber dicas e
                            atualizações exclusivas.
                        </p>

                        <form className={styles.form}>
                            <input
                                type="email"
                                name="email"
                                placeholder="Endereço de e-mail"
                                required
                                aria-label="Digite seu e-mail"
                            />
                            <button type="submit" aria-label="Enviar email">
                                <ChevronRight />
                            </button>
                        </form>
                    </section>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <div className={styles.brand}>
                        <Logo />

                        <address>
                            <a
                                target="_blank"
                                href="https://www.google.com/maps/place/Al.+Rio+Negro,+1030+-+Alphaville+Industrial,+Barueri+-+SP,%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20+06454-000/@-23.4969613,-46.848407,17z/data=!4m16!1m9!3m8!1s0x94cf023cc55b350d:0x7dec8f4d672ff0ca!2sAl.%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20+Rio+Negro,+1030+-+Alphaville+Industrial,+Barueri+-+SP,+06454-000!3b1!8m2!3d-23.4966017!4d-46.8482204!1%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%200e5!16s%2Fg%2F11bw3xyw34!3m5!1s0x94cf023cc55b350d:0x7dec8f4d672ff0ca!8m2!3d-23.4966017!4d-46.8482204!16%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20s%2Fg%2F11bw3xyw34?entry=ttu"
                            >
                                AL. Rio Negro, 1030 – conj. 2304
                                <br />
                                Alphaville industrial, Barueri / SP – 06454-000
                            </a>
                        </address>
                    </div>

                    <div className={styles.contact}>
                        <a href="tel:+5511919149870">+55 11 91914-9870</a>
                        <a href="mailto:contato@pixelweb.dev.br">
                            contato@pixelweb.dev.br
                        </a>
                    </div>

                    <div className={styles.social}>
                        <a href="#" aria-label="LinkedIn">
                            <Linkedin />
                        </a>
                        <a href="#" aria-label="Instagram">
                            <Instagram />
                        </a>
                        <a href="#" aria-label="Facebook">
                            <Facebook />
                        </a>
                    </div>
                </div>

                <div className={styles.legal}>
                    <p>
                        © PixelWeb {new Date().getFullYear()} – Todos os
                        direitos reservados.
                    </p>

                    <a href="#top" className={styles.top}>
                        Voltar ao topo ↑
                    </a>
                </div>
            </div>
        </footer>
    );
}
