import { Loader } from './utilities/loader.js';
window.addEventListener('load', () => {
	const lang = navigator.language || navigator.userLanguage;
	const message = lang.startsWith('es')
		? 'Configurando la aplicación, por favor espera...'
		: 'Setting up the application, please wait...';
	Loader.show(message);
	setTimeout(() => {
		const base = window.location.pathname.replace(/\/$/, '');
		if (lang.startsWith('es')) {
			window.location.href = base + '/es/';
		} else {
			window.location.href = base + '/en/';
		}
	}, 2000);
});