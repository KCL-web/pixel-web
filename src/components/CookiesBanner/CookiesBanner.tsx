import React from 'react';
import type { ConsentPrefs } from '@/utils/cookies';
import { useCookieConsent } from '@/hooks/useCookieConsent';
import {
    loadAnalyticsIfNeeded,
    loadSocialIfNeeded,
    loadAdvertisingIfNeeded,
    initConsentSystem,
} from '@/services/ConsentManager';
import styles from './CookiesBanner.module.scss';
import { COOKIE_CATEGORIES } from '@/data/CookiesBanner';

export default function CookiesBanner() {
    const [consent, updateConsent, visible] = useCookieConsent();
    React.useEffect(() => {
        initConsentSystem();
    }, []);

    const [prefs, setPrefs] = React.useState<ConsentPrefs>(consent);
    React.useEffect(() => {
        setPrefs(consent);
    }, [consent]);
    const [modalOpen, setModalOpen] = React.useState(false);

    const acceptAll = () => {
        const next: ConsentPrefs = {
            essential: true,
            analytics: true,
            social: true,
            advertising: true,
        };
        updateConsent(next);
        loadAnalyticsIfNeeded();
        loadSocialIfNeeded();
        loadAdvertisingIfNeeded();
    };

    const rejectAll = () => {
        setPrefs({
            ...prefs,
            analytics: false,
            social: false,
            advertising: false,
        });
    };

    const [toast, setToast] = React.useState<string | null>(null);

    const savePrefs = () => {
        setToast('Preferências atualizadas');

        setModalOpen(false);

        window.setTimeout(() => setToast(null), 1800);
    };

    if (!visible) return null;

    return (
        <aside
            className={styles.banner}
            role="region"
            aria-label="Aviso de cookies"
        >
            <div className={styles.content}>
                <h3 className={styles.title}>Este site utiliza cookies</h3>
                <p className={styles.description}>
                    Usamos cookies opcionais para melhorar sua experiência em
                    nossos sites, como por meio de conexões de mídia social e
                    para exibir publicidade personalizada com base em sua
                    atividade online. Se você rejeitar os cookies opcionais,
                    serão usados somente os cookies necessários para fornecer os
                    serviços. Você pode alterar sua escolha clicando em
                    'Gerenciar Cookies' na parte inferior da página.
                </p>
                <div className={styles.actions}>
                    <button
                        className={styles.button}
                        onClick={acceptAll}
                        aria-label="Aceitar cookies opcionais"
                    >
                        Aceitar
                    </button>
                    <button
                        className={styles.button}
                        onClick={rejectAll}
                        aria-label="Rejeitar cookies opcionais"
                    >
                        Rejeitar
                    </button>
                    <button
                        className={styles.button}
                        onClick={() => setModalOpen(true)}
                        aria-label="Gerenciar cookies"
                    >
                        Gerenciar Cookies
                    </button>
                </div>
                {modalOpen && (
                    <div
                        className={styles.modalOverlay}
                        role="dialog"
                        aria-label="Gerenciar Cookies"
                    >
                        <div className={styles.modalContent}>
                            <h4>Gerenciar Cookies</h4>
                            {COOKIE_CATEGORIES.map((cat) => (
                                <div
                                    className={styles.cookieCategory}
                                    key={cat.key}
                                >
                                    <h5>{cat.title}</h5>
                                    <p>{cat.description}</p>
                                    <div className={styles.optionGroup}>
                                        {cat.alwaysActive ? (
                                            <label>
                                                <input
                                                    type="radio"
                                                    checked
                                                    disabled
                                                />
                                                Sempre ativo
                                            </label>
                                        ) : (
                                            <>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={cat.key}
                                                        checked={
                                                            prefs[
                                                                cat.key as keyof ConsentPrefs
                                                            ] === true
                                                        }
                                                        onChange={() =>
                                                            setPrefs({
                                                                ...prefs,
                                                                [cat.key]: true,
                                                            })
                                                        }
                                                    />
                                                    Aceitar
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name={cat.key}
                                                        checked={
                                                            prefs[
                                                                cat.key as keyof ConsentPrefs
                                                            ] === false
                                                        }
                                                        onChange={() =>
                                                            setPrefs({
                                                                ...prefs,
                                                                [cat.key]: false,
                                                            })
                                                        }
                                                    />
                                                    Rejeitar
                                                </label>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                            <div className={styles.modalActions}>
                                <button
                                    className={styles.button}
                                    onClick={savePrefs}
                                >
                                    Salvar preferências
                                </button>
                                <button
                                    className={styles.button}
                                    onClick={() => setModalOpen(false)}
                                >
                                    Fechar
                                </button>
                            </div>
                        </div>
                    </div>
                )}
                <div
                    aria-live="polite"
                    aria-atomic="true"
                    className={styles.toastArea}
                >
                    {toast && <span className={styles.toast}>{toast}</span>}
                </div>
            </div>
        </aside>
    );
}
