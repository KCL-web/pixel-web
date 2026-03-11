import React from 'react';
import styles from './Container.module.scss';

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
    as?: React.ElementType;
};

const Container: React.FC<ContainerProps> = ({
    as: Tag = 'div',
    children,
    className = '',
    ...props
}) => {
    const cls = [styles.container, className].filter(Boolean).join(' ');
    return (
        <Tag className={cls} {...props}>
            {children}
        </Tag>
    );
};

export default Container;
