import { useEffect, useState } from 'react';
import styles from './InnovationSection.module.scss';

interface InnovationSectionProps {
    words?: string[];
    interval?: number;
}

const DEFAULT_WORDS: string[] = [
    'Tecnologia',
    'Soluções Digitais',
    'Performance',
    'Inovação',
];

export default function InnovationSection({
    words = DEFAULT_WORDS,
    interval = 3000,
}: InnovationSectionProps) {
    const [index, setIndex] = useState<number>(0);
    const [animate, setAnimate] = useState<boolean>(true);

    useEffect(() => {
        const timer = setInterval(() => {
            setAnimate(false);

            setTimeout(() => {
                setIndex((prev) => (prev + 1) % words.length);
                setAnimate(true);
            }, 200);
        }, interval);

        return () => clearInterval(timer);
    }, [interval, words.length]);

    return (
        <section
            id="sobre"
            className={styles.section}
            aria-labelledby="innovation-heading"
        >
            <div className={styles.container}>
                <header className={styles.left}>
                    <h1 id="innovation-heading" className={styles.title}>
                        Movidos por inovação e resultados
                    </h1>

                    <h2 className={styles.dynamicWrapper}>
                        <span
                            className={`${styles.dynamicWord} ${
                                animate ? styles.enter : styles.leave
                            }`}
                            aria-live="polite"
                        >
                            {words[index]}
                        </span>
                    </h2>
                </header>

                <div className={styles.right}>
                    <h3 className={styles.subtitle}>
                        Soluções digitais para transformar seu negócio
                    </h3>

                    <p className={styles.description}>
                        Desenvolvemos sistemas, websites e aplicativos sob
                        medida para empresas que buscam escalar sua presença
                        digital. Com foco em performance, experiência do usuário
                        e arquitetura escalável, criamos soluções tecnológicas
                        que otimizam processos, fortalecem a presença online e
                        impulsionam resultados reais.
                    </p>

                    <div className={styles.tags}>
                        <span>Desenvolvimento de Sistemas</span>
                        <span>Websites de Alta Performance</span>
                        <span>Aplicativos Mobile</span>
                        <span>Infraestrutura Cloud</span>
                        <span>UI/UX Design</span>
                        <span>Auditoria e Otimização</span>
                    </div>
                </div>
            </div>

            <div className={styles.decorativeCircles} aria-hidden />
        </section>
    );
}
