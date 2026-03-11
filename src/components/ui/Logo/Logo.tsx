import styles from './Logo.module.scss';

import logoIcon from '@assets/pweb-logo-icon.svg';
import logoFull from '@assets/pweb-logo.svg';

type LogoSize = 'small' | 'medium' | 'large';
type LogoVariant = 'full' | 'icon';

interface LogoProps {
    size?: LogoSize;
    variant?: LogoVariant;
    className?: string;
}

const logoMap: Record<LogoVariant, string> = {
    full: logoFull,
    icon: logoIcon,
};

const Logo = ({
    size = 'medium',
    variant = 'full',
    className = '',
}: LogoProps) => {
    const classes = [styles.logo, styles[size], className]
        .filter(Boolean)
        .join(' ');

    const src = logoMap[variant];

    return (
        <div className={classes}>
            <img
                src={src}
                alt="Virtual Visions"
                loading="eager"
                decoding="async"
            />
        </div>
    );
};

export default Logo;
