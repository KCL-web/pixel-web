export type ConsentPrefs = {
    essential: boolean;
    analytics?: boolean;
    social?: boolean;
    advertising?: boolean;
    timestamp?: number;
};

export const CONSENT_KEY = 'cookie-consent-v1';
export const DEFAULT_CONSENT: ConsentPrefs = {
    essential: true,
    analytics: false,
    social: false,
    advertising: false,
    timestamp: Date.now(),
};

export function getConsent(): ConsentPrefs {
    try {
        const raw = localStorage.getItem(CONSENT_KEY);
        if (!raw) return DEFAULT_CONSENT;
        const parsed = JSON.parse(raw) as ConsentPrefs;
        return {
            essential:
                typeof parsed.essential === 'boolean' ? parsed.essential : true,
            analytics:
                typeof parsed.analytics === 'boolean'
                    ? parsed.analytics
                    : false,
            social: typeof parsed.social === 'boolean' ? parsed.social : false,
            advertising:
                typeof parsed.advertising === 'boolean'
                    ? parsed.advertising
                    : false,
            timestamp: parsed.timestamp ?? Date.now(),
        };
    } catch {
        return DEFAULT_CONSENT;
    }
}

export function setConsent(prefs: Partial<ConsentPrefs>): ConsentPrefs {
    const current = getConsent();
    const merged = { ...current, ...prefs, timestamp: Date.now() };
    localStorage.setItem(CONSENT_KEY, JSON.stringify(merged));
    return merged;
}

export function resetConsent(): void {
    localStorage.removeItem(CONSENT_KEY);
}
