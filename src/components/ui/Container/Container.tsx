import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    as?: keyof HTMLElementTagNameMap;
};

const Container: React.FC<ContainerProps> = ({
    as,
    children,
    className = '',
    ...props
}) => {
    const Tag = (as ?? 'div') as keyof JSX.IntrinsicElements;
    const cls = [styles.container, className].filter(Boolean).join(' ');
    return (
        <Tag className={cls} {...props}>
            {children}
        </Tag>
    );
};

export default Container;
