import React, { useEffect, useRef } from 'react';
import styles from './Section.module.scss';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
    id?: string;
}

export default function Section({
    children,
    className = '',
    id,
    ...props
}: SectionProps) {
    const ref = useRef<HTMLElement | null>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        el.classList.add(styles.visible);
                        obs.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 },
        );
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    const TagName: React.ElementType = 'section';
    return (
        <TagName
            id={id}
            ref={ref}
            className={`${styles.section} ${className}`}
            {...props}
        >
            {children}
        </TagName>
    );
}
