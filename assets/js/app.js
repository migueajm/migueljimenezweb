import { router } from './router.js';
import { Loader } from './utilities/loader.js';

window.addEventListener('load', () => {
	let lang = navigator.language || navigator.userLanguage;
	const locale = window.location.pathname.replace('/', '');
	if(!locale != lang) lang = locale;
	const message = lang.startsWith('es')
		? 'Configurando la aplicación, por favor espera...'
		: 'Setting up the application, please wait...';
	Loader.show(message);
	
});
document.addEventListener('DOMContentLoaded', () => {
	router.routeHandler();
	document.getElementById('theme-toggle').addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
		document.documentElement.setAttribute('data-theme', newTheme);
	});
});