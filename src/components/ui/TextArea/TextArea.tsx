import * as React from 'react';
import styles from './TextArea.module.scss';

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    label?: string;
};

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
    ({ className = '', label, ...props }, ref) => {
        const classes = [styles.textarea, className].filter(Boolean).join(' ');

        return (
            <div className={styles.wrapper}>
                {label && <label className={styles.label}>{label}</label>}
                <textarea ref={ref} className={classes} {...props} />
            </div>
        );
    },
);

Textarea.displayName = 'Textarea';
