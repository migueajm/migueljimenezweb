import { SecureStorageManager } from './storage.js';

const STORAGE_KEY = 'portfolio-theme';

export const initTheme = () => {
    const theme =
        (new SecureStorageManager()).get(STORAGE_KEY) ||
        'dark';
    setTheme(theme);
};

export const toggleTheme = () => {
    const current =
        document.documentElement.dataset.theme;

    const next =
        current === 'dark'
            ? 'light'
            : 'dark';

    setTheme(next);
};

export const setTheme = (theme) => {
    document.documentElement.dataset.theme = theme;

    (new SecureStorageManager()).set(
        STORAGE_KEY,
        theme
    );
};