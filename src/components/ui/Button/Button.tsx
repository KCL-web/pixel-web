import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import styles from './Button.module.scss';

type Variant =
    | 'default'
    | 'destructive'
    | 'gradient'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link'
    | 'snake';

type Size = 'default' | 'sm' | 'lg' | 'xl' | 'icon';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: Variant;
    size?: Size;
    asChild?: boolean;
}

const variantClasses: Record<Variant, string> = {
    default: styles.variantDefault,
    destructive: styles.variantDestructive,
    gradient: styles.variantGradient,
    outline: styles.variantOutline,
    secondary: styles.variantSecondary,
    ghost: styles.variantGhost,
    link: styles.variantLink,
    snake: styles.variantSnake,
};

const sizeClasses: Record<Size, string> = {
    default: styles.sizeDefault,
    sm: styles.sizeSm,
    lg: styles.sizeLg,
    xl: styles.sizeXl,
    icon: styles.sizeIcon,
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className = '',
            variant = 'default',
            size = 'default',
            asChild = false,
            type = 'button',
            ...props
        },
        ref,
    ) => {
        const Comp = asChild ? Slot : 'button';

        const classes = [
            styles.button,
            variantClasses[variant],
            sizeClasses[size],
            className,
        ].join(' ');

        return (
            <Comp
                ref={ref}
                className={classes}
                type={!asChild ? type : undefined}
                {...props}
            >
                <span className={styles.content}>{props.children}</span>
            </Comp>
        );
    },
);

Button.displayName = 'Button';
