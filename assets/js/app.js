import { router } from './router.js';
import { Loader } from './utilities/loader.js';
import { SecureStorageManager } from './utilities/secure_store_mnager.js';

window.addEventListener('load', () => {
	let lang = navigator.language || navigator.userLanguage;
	const locale = window.location.pathname.replace('/', '');
	if(!locale != lang) lang = locale;
	const message = lang.startsWith('es')
	? 'Configurando la aplicación, por favor espera...'
	: 'Setting up the application, please wait...';
	Loader.show(message);
	setTimeout(() => Loader.hide(), 1000);
});
document.addEventListener('DOMContentLoaded', () => {
	router.routeHandler();
	const secureStorage = SecureStorageManager.attachToExisting('app-migueajm-portfolio');
	window.setTheme = theme => {
		let newTheme = 'dark';
		if(theme != 'dark'){
			newTheme = 'light';
			document.getElementById('theme-toggle').textContent = '🌙';
		}else {
			document.getElementById('theme-toggle').textContent = '☀️';
		}
		document.documentElement.setAttribute('data-theme', newTheme);
		secureStorage.set('theme', newTheme);
	}
	
	document.getElementById('theme-toggle').addEventListener('click', () => {
		const currentTheme = document.documentElement.getAttribute('data-theme');
		setTheme(currentTheme === 'dark' ? 'light' : 'dark');
	});

	const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
  });

	window.toggleDetails = button => {
		const content = button.nextElementSibling;
		content.classList.toggle('show');
	}

	document.querySelector('#age').textContent = (new Date).getFullYear();
	document.querySelector('#version').textContent = 'v2.0.0';

	const theme = secureStorage.get('theme');
	if(!theme){
		return;
	}
	setTheme(theme);
});