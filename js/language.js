import { SecureStorageManager } from './storage.js';

import en from './locales/en.js';
import es from './locales/es.js';

const STORAGE_KEY = 'portfolio-language';

const locales = {
    en,
    es
};

export let currentLanguage = 'en';

export let translations = locales.en;

export const initLanguage = () => {
    const savedLanguage =
        (new SecureStorageManager()).get(STORAGE_KEY);

    if (savedLanguage) {
        currentLanguage = savedLanguage;
    } else {
        const browserLanguage =
            navigator.language
                .toLowerCase()
                .startsWith('es')
                ? 'es'
                : 'en';

        currentLanguage = browserLanguage;

        (new SecureStorageManager()).set(
            STORAGE_KEY,
            currentLanguage
        );
    }

    translations =
        locales[currentLanguage];
};

export const t = (path) => {
    return path
        .split('.')
        .reduce(
            (obj, key) => obj?.[key],
            translations
        );
};