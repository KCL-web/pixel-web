import { useState } from 'react';
import { getConsent, setConsent } from '@/utils/cookies';
import type { ConsentPrefs } from '@/utils/cookies';

export function useCookieConsent(): [
    ConsentPrefs,
    (next: Partial<ConsentPrefs>) => void,
    boolean,
] {
    const [consent, setConsentState] = useState<ConsentPrefs>(() =>
        getConsent(),
    );

    const visible = !(
        consent.analytics ||
        consent.social ||
        consent.advertising
    );

    const update = (next: Partial<ConsentPrefs>) => {
        const merged = { ...consent, ...next } as ConsentPrefs;
        const final = setConsent(merged) as ConsentPrefs;
        setConsentState(final);
    };

    return [consent, update, visible];
}
