// Tipagem global para propriedades adicionadas ao window
declare global {
    interface Window {
        _gaLoaded?: boolean;
        _marketingLoaded?: boolean;
        _socialLoaded?: boolean;
        _advertisingLoaded?: boolean;
        dataLayer?: unknown[];
        gtag?: (...args: unknown[]) => void;
    }
}

export function loadSocialIfNeeded(): void {
    if (typeof window === 'undefined') return;
    if (
        (window as Window & typeof globalThis & { _socialLoaded?: boolean })
            ._socialLoaded
    )
        return;
    (
        window as Window & typeof globalThis & { _socialLoaded?: boolean }
    )._socialLoaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://example-cdn.com/social.js';
    script.onload = () => {};
    document.head.appendChild(script);
}

export function loadAdvertisingIfNeeded(): void {
    if (typeof window === 'undefined') return;
    if (
        (
            window as Window &
                typeof globalThis & { _advertisingLoaded?: boolean }
        )._advertisingLoaded
    )
        return;
    (
        window as Window & typeof globalThis & { _advertisingLoaded?: boolean }
    )._advertisingLoaded = true;
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://example-cdn.com/advertising.js';
    script.onload = () => {};
    document.head.appendChild(script);
}

export function loadScriptIfNeeded(src?: string, id?: string): Promise<void> {
    return new Promise((resolve) => {
        if (src && id && document.getElementById(id)) {
            resolve();
            return;
        }

        const script = document.createElement('script');

        if (src) script.src = src;
        if (id) script.id = id;

        script.async = true;
        script.onload = () => resolve();

        document.head.appendChild(script);
    });
}

export const GA_MEASUREMENT_ID = 'G-XXXXXXX'; // substitua pelo ID real

export function loadAnalyticsIfNeeded(): void {
    if (typeof window === 'undefined') return;

    if (window._gaLoaded) return;
    window._gaLoaded = true;

    const url = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;

    const script = document.createElement('script');
    script.async = true;
    script.src = url;

    script.onload = () => {
        window.dataLayer = window.dataLayer || [];

        const gtag = (...args: unknown[]) => {
            window.dataLayer?.push(args);
        };

        window.gtag = gtag;

        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
    };

    document.head.appendChild(script);
}

export function loadMarketingIfNeeded(): void {
    if (typeof window === 'undefined') return;

    if (window._marketingLoaded) return;
    window._marketingLoaded = true;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://example-cdn.com/marketing.js';

    script.onload = () => {
        // inicialização opcional
    };

    document.head.appendChild(script);
}

export function initConsentSystem(): void {
    // placeholder para inicializações futuras
}
