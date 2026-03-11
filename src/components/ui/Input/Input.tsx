import * as React from 'react';
import styles from './Input.module.scss';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    label?: string;
    error?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className = '', type = 'text', label, error, ...props }, ref) => {
        const classes = [styles.input, className].filter(Boolean).join(' ');

        return (
            <div className={styles.wrapper}>
                {label && <label htmlFor={props.id}>{label}</label>}
                <input ref={ref} type={type} className={classes} {...props} />
                <span className={styles.error}>{error || ''}</span>
            </div>
        );
    },
);

Input.displayName = 'Input';
