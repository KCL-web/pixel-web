import React, { useEffect, useMemo, useRef, useState } from 'react';
import styles from './Slider.module.scss';

export type SlideItem = { image?: string; alt?: string; text?: string };
export type SliderProps = {
    slides?: SlideItem[];
    direction?: 'left' | 'right';
    speed?: number;
    className?: string;
};

const defaultSlides: SlideItem[] = [
    // aqui ficariam as imagens/texts padrão caso fosse necessário,
    // mas em uma implementação dump, não haverá uso direto se não houver slides passados via props
];

export default function Slider({
    slides,
    direction = 'left',
    speed = 60,
    className = '',
}: SliderProps) {
    const [totalWidth, setTotalWidth] = useState(0);
    const items: SlideItem[] = slides && slides.length ? slides : defaultSlides;
    const trackRef = useRef<HTMLDivElement | null>(null);
    const [offset, setOffset] = useState(0);
    const slideW = useRef<number>(0);
    const totalW = useRef<number>(0);

    // mede a largura do slide para calcular o looping
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;
        const first = track.querySelector(
            `.${styles.slide}`,
        ) as HTMLElement | null;
        if (first) {
            slideW.current = first.getBoundingClientRect().width;
            const width =
                slideW.current * items.length + 80 * (items.length - 1);
            totalW.current = width;
            setTotalWidth(width);
        }
    }, [items.length]);

    // loop de animação
    useEffect(() => {
        let raf = 0;
        let last = performance.now();
        const loop = (t: number) => {
            const dt = Math.max(0, (t - last) / 1000);
            last = t;
            const delta = speed * dt;

            setOffset((o) => {
                let next = o + delta;

                if (totalW.current > 0 && next >= totalW.current) {
                    next -= totalW.current;
                }

                return next;
            });

            raf = requestAnimationFrame(loop);
        };
        raf = requestAnimationFrame(loop);
        return () => cancelAnimationFrame(raf);
    }, [direction, speed, items.length]);

    const dir = direction === 'left' ? -1 : 1;

    const baseOffset = direction === 'right' && totalWidth ? -totalWidth : 0;

    const trackStyle: React.CSSProperties = {
        transform: `translateX(${offset * dir + baseOffset}px)`,
        display: 'flex',
    };

    const renderSlide = (i: SlideItem, idx: number) => (
        <div className={styles.slide} key={idx}>
            {i.image ? (
                <img
                    height={160}
                    width={160}
                    src={i.image}
                    alt={i.alt ?? 'Cliente'}
                />
            ) : i.text ? (
                <span className={styles.slideText}>{i.text}</span>
            ) : null}
        </div>
    );

    // duplicamos os slides para o looping suave
    const slidesToRender = useMemo(() => [...items, ...items], [items]);

    return (
        <section className={`${styles.section} ${className}`.trim()}>
            <div className={styles.container}>
                <div className={styles.slider}>
                    <div
                        className={styles.track}
                        ref={trackRef}
                        style={trackStyle}
                    >
                        {slidesToRender.map((slide, idx) =>
                            renderSlide(slide, idx),
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
