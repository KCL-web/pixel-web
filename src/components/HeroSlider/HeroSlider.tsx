'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { heroSlides, type HeroSlide } from '@data/HeroSlide';
import styles from './HeroSlide.module.scss';

interface HeroSliderProps {
    slides?: HeroSlide[];
    interval?: number;
}

export default function HeroSlider({
    slides = heroSlides,
    interval = 6000,
}: HeroSliderProps) {
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const slider = setInterval(() => {
            setIndex((prev) => (prev + 1) % slides.length);
        }, interval);

        const handleKeyDown = (e: KeyboardEvent) => {
            const tag =
                (document.activeElement && document.activeElement.tagName) ||
                '';
            if (['INPUT', 'TEXTAREA', 'BUTTON', 'SELECT'].includes(tag)) return;
            if (e.key === 'ArrowRight') {
                setIndex((prev) => (prev + 1) % slides.length);
            } else if (e.key === 'ArrowLeft') {
                setIndex((prev) => (prev - 1 + slides.length) % slides.length);
            }
        };
        window.addEventListener('keydown', handleKeyDown);

        return () => {
            clearInterval(slider);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [slides.length, interval]);

    const goTo = (i: number) => setIndex(i);

    return (
        <section
            className={styles.hero}
            aria-roledescription="carousel"
            aria-label="Destaques PixelWeb"
        >
            <div className={styles.slider}>
                {slides.map((slide, i) => (
                    <article
                        key={i}
                        className={`${styles.slide} ${
                            i === index ? styles.active : ''
                        }`}
                        aria-hidden={i !== index}
                    >
                        <div className={styles.overlay} />

                        <img
                            src={slide.image}
                            alt={slide.title}
                            className={styles.background}
                            loading="eager"
                        />

                        <div className={styles.content}>
                            <AnimatePresence mode="wait">
                                {i === index && (
                                    <>
                                        <motion.header
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 40 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0,
                                            }}
                                        >
                                            <motion.h1
                                                className={styles.title}
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 40 }}
                                                transition={{
                                                    duration: 0.7,
                                                    delay: 0,
                                                }}
                                            >
                                                {slide.title}
                                            </motion.h1>
                                            <motion.h2
                                                className={styles.subtitle}
                                                initial={{ opacity: 0, y: 40 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 40 }}
                                                transition={{
                                                    duration: 0.7,
                                                    delay: 0.3,
                                                }}
                                            >
                                                {slide.subtitle}
                                            </motion.h2>
                                        </motion.header>
                                        <motion.p
                                            className={styles.description}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 40 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.6,
                                            }}
                                        >
                                            {slide.description}
                                        </motion.p>
                                        <motion.a
                                            href={slide.url}
                                            className={styles.cta}
                                            initial={{ opacity: 0, y: 40 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 40 }}
                                            transition={{
                                                duration: 0.7,
                                                delay: 0.9,
                                            }}
                                            tabIndex={0}
                                            role="button"
                                        >
                                            Veja nossos serviços
                                        </motion.a>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                    </article>
                ))}
            </div>

            <div className={styles.pagination}>
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`${styles.dot} ${i === index ? styles.activeDot : ''}`}
                        aria-label={`Ir para slide ${i + 1}`}
                    />
                ))}
            </div>
        </section>
    );
}
