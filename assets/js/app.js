import { router } from './router.js';
import Dialog from './utilities/dialog.js';
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

	window.createIframe = url => {
		const loader = Loader.getElement('');
		const container = document.createElement('div');
		container.setAttribute('style', 'display: flex; justify-content: center');
		const iframe = document.createElement('iframe');
		iframe.src = url;
		iframe.width = '100%';
		iframe.height = '400';
		iframe.style.border = 'none';
		iframe.loading = 'lazy';
		iframe.load
		container.appendChild(loader);
		container.appendChild(iframe);
		iframe.style.display = 'none';
		iframe.addEventListener('load', () => {
			loader.remove();
			iframe.style.display = 'block';
		});
		setTimeout(() => {
			if (iframe.style.display === 'none') {
				loader.remove();
				iframe.style.display = 'block';
			}
		}, 3000);
		return container;
	}

	document.querySelector('#age').textContent = (new Date).getFullYear();
	[...document.querySelectorAll('a.a-iframe')].forEach(anchor => {
		anchor.addEventListener('click', async (e) => {
			e.preventDefault();
			const a = e.currentTarget;
			const url = a.href;
			const origin = (new URL(url)).origin;
			const blockedOrigins = [
				'https://github.com',
				'https://facebook.com',
				'https://www.facebook.com',
				'https://twitter.com',
				'https://www.instagram.com',
				'https://accounts.google.com',
				'https://linkedin.com',
				'https://www.linkedin.com',
			];
			if(blockedOrigins.some(blocked => origin.startsWith(blocked))){
				window.open(url, '_blank');
				return;
			}
			Dialog.show({
				title: origin,
				htmlElement: createIframe(url),
				size: Dialog.size('xl'),
				hideBtn: true
			});
		});
	});

	const defaultIcons = ['html', 'css', 'materialize', 'bootstrap', 'tailwind', 'jwt'];
	const previews = {
		php: ['php', 'laravel', 'symfony', 'composer', 'apache', ...defaultIcons],
		javascript: ['js', 'jquery', 'ts', 'nodejs', 'angular', 'ionic', 'react', 'vue', ...defaultIcons],
		sql: ['sql', 'postgresql', 'mysql'],
		git: ['git', 'github', 'gitlab', 'bitbucket'],
		dart: ['dart', 'flutter', 'android', 'ios']
	};

	document.querySelectorAll('span.outlined-button').forEach(tag => {
		tag.addEventListener('mouseover', () => {
			document.querySelectorAll('span.outlined-button').forEach(t => t.classList.remove('active'));
			tag.classList.add('active');
			const skill = tag.textContent.toLowerCase().trim();
			const container = document.getElementById('preview-box');
			container.hidden = false;
			container.className = 'preview-box';
			container.innerHTML = '';
			previews[skill]?.forEach(icon => {
				const img = document.createElement('img');
				img.src = `https://migueajm.github.io/migueljimenezweb/assets/images/code/${icon}.webp`;
				img.alt = icon;
				img.loading = 'lazy';
				img.style.backgroundColor = 'white';
				img.addEventListener('error', () => {
					img.style.display = 'none';
				})
				container.appendChild(img);
			});
		});
	});
	const theme = secureStorage.get('theme');
	if(!theme){
		return;
	}
	setTheme(theme);
});