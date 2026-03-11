import AppLayout from '@/components/layout/AppLayout';
import styles from './Home.module.scss';
import Slider from '@components/ui/Slider/Slider';
import ContactForm from '@/components/ui/ContactForm/ContactForm';
import Capabilities from '@/pages/Home/_components/Capabilities/Capabilities';
import { companySlides } from '@/data/CompanySlides';
import { techSlides } from '@/data/TechSlide';
import { Button } from '@/components/ui/Button/Button';
import { ChevronRight } from 'lucide-react';
import InnovationSection from './_components/InnovationSection/InnovationSection';

export default function Home() {
    return (
        <AppLayout>
            <div className={styles.container}>
                <section className={styles.heroSection}>
                    <div>
                        <h1 className={styles.title}>
                            Transformamos ideias em {''}
                            <span>experiências digitais</span> incríveis
                        </h1>
                        <p className={styles.description}>
                            Desenvolvemos websites, plataformas e aplicações
                            modernas com foco em performance, design e
                            experiência do usuário.
                        </p>
                    </div>
                    <a href="/#contato">
                        <Button>
                            Começar um projeto <ChevronRight />
                        </Button>
                    </a>
                </section>

                <InnovationSection />

                <section className={styles.companies}>
                    <h2 className={styles.title}>
                        Empresas que confiam na <strong>PixelWeb</strong> para
                        transformar ideias em soluções digitais escaláveis
                        <span>.</span>
                    </h2>
                    <Slider
                        slides={companySlides}
                        direction="left"
                        speed={60}
                    />
                </section>
                <Capabilities />
                <section className={styles.stacks}>
                    <h2 className={styles.title}>
                        Tecnologias modernas que utilizamos para desenvolver
                        soluções digitais de alta performance
                        <span>.</span>
                    </h2>
                    <Slider slides={techSlides} direction="left" speed={60} />
                    <Slider slides={techSlides} direction="right" speed={60} />
                </section>
            </div>

            <ContactForm />
        </AppLayout>
    );
}
