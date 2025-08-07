import AppInitializer from './utilities/app_inicializer.js';
import { Loader } from './utilities/loader.js';

window.addEventListener('load', () => {
  let lang = navigator.language || navigator.userLanguage;
  const locale = window.location.pathname.replace('/', '');
  if (!locale != lang) lang = locale;

  const message = lang.startsWith('es')
    ? 'Configurando la aplicación, por favor espera...'
    : 'Setting up the application, please wait...';

  Loader.show(message);
  setTimeout(() => Loader.hide(), 1000);
});

document.addEventListener('DOMContentLoaded', () => {
  const app = new AppInitializer('https://migueajm.github.io/migueljimenezweb/', 'app-migueajm-portfolio');
  app.init();
});