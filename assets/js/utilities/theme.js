export class ThemeManager {
  static storage = new SecureStorageManager('app');
  static themeKey = 'theme';

  static getSystemPreference() {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark-theme';
    }
    return 'light-theme';
  }

  static getStoredTheme() {
    return this.storage.get(this.themeKey, this.getSystemPreference());
  }

  static applyTheme(theme) {
    document.body.classList.remove('dark-theme', 'light-theme');
    document.body.classList.add(theme);
  }

  static saveTheme(theme) {
    this.storage.set(this.themeKey, theme);
  }

  static init() {
    const theme = this.getStoredTheme();
    this.applyTheme(theme);

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
      const stored = this.storage.get(this.themeKey);
      if (!stored) {
        this.applyTheme(e.matches ? 'dark-theme' : 'light-theme');
      }
    });
  }

  static toggleTheme() {
    const current = this.getStoredTheme();
    const newTheme = current === 'dark-theme' ? 'light-theme' : 'dark-theme';
    this.applyTheme(newTheme);
    this.saveTheme(newTheme);
  }
}