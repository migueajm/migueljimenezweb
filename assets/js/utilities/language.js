import { FetchService } from "./fetch_service.js";

export class LanguageManager {
  static storage = new SecureStorageManager('app');
  static languageKey = 'locale';

  static allowedLanguages = ['en', 'es', 'fr', 'de', 'pt', 'it'];

  static getBrowserLanguage() {
    const lang = navigator.language || navigator.userLanguage || 'en';
    const shortLang = lang.split('-')[0];
    return this.allowedLanguages.includes(shortLang) ? shortLang : 'en';
  }

  static getLanguage() {
    const storedLang = this.storage.get(this.languageKey);
    if (storedLang && this.allowedLanguages.includes(storedLang)) {
      return storedLang;
    }
    return this.getBrowserLanguage();
  }

  static setLanguage(langCode) {
    if (this.allowedLanguages.includes(langCode)) {
      this.storage.set(this.languageKey, langCode);
    } else {
      console.warn(`Language "${langCode}" is not supported.`);
    }
  }

  static toggle(locale) {
    locale =  this.allowedLanguages.includes(locale) ? locale : 'en';
    const f = new FetchService(window?.app_url ?? '');
    LanguageManager.setLanguage(locale);
    f.get('/locale/set?locale=' + locale);
  }
}