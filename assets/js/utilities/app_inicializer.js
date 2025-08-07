import { router } from '../router.js';
import Dialog from './dialog.js';
import { Loader } from './loader.js';
import { SecureStorageManager } from './secure_store_mnager.js';

export default class AppInitializer {
  constructor(path, storageKey) {
    this.path = path;
    this.secureStorage = SecureStorageManager.attachToExisting(storageKey);
    this.defaultIcons = ['html', 'css', 'materialize', 'bootstrap', 'tailwind', 'jwt'];
		this.design = ['poo', 'mvc', 'orm', 'clean architecture'];
    this.previews = {
      php: ['php', 'laravel', 'symfony', 'composer', 'apache', ...this.defaultIcons],
      javascript: ['js', 'jquery', 'ts', 'nodejs', 'angular', 'ionic', 'react', 'vue', ...this.defaultIcons],
      sql: ['sql', 'postgresql', 'mysql'],
      git: ['git', 'github', 'gitlab', 'bitbucket'],
      dart: ['dart', 'flutter', 'android', 'ios'],
			'design patterns': this.design,
			'patrones de diseño': this.design
    };
  }

  init() {
    router.routeHandler();
    this.initTheme();
    this.initHamburger();
    this.initTimeline();
    this.initIframes();
    this.initSkillPreview();
    this.initHeroImage();
    this.setYear();
    this.restoreTheme();
  }

  initTheme() {
    window.setTheme = (theme) => {
      const isDark = theme === 'dark';
      const newTheme = isDark ? 'dark' : 'light';
      const icon = isDark ? '🌙' : '☀️';
      document.getElementById('theme-toggle').textContent = icon;
      document.documentElement.setAttribute('data-theme', newTheme);
      this.secureStorage.set('theme', newTheme);
    };

    document.getElementById('theme-toggle').addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const theme = currentTheme === 'dark' ? 'light' : 'dark';
      setTheme(theme);
    });
  }

initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
  });

  const menuLinks = navMenu.querySelectorAll('li a');

  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('show');
    });
  });
}

  initTimeline() {
    window.toggleDetails = (button) => {
      const content = button.nextElementSibling;
      const isOpen = content.classList.contains('show');
      document.querySelectorAll('.timeline-content.show').forEach(c => c.classList.remove('show'));
      if (!isOpen) content.classList.add('show');
    };
  }

  initIframes() {
    window.createIframe = (url) => {
      const loader = Loader.getElement();
      const container = document.createElement('div');
      container.style.display = 'flex';
      container.style.justifyContent = 'center';

      const iframe = document.createElement('iframe');
      iframe.src = url;
      iframe.width = '100%';
      iframe.height = '400';
      iframe.style.border = 'none';
      iframe.loading = 'lazy';
      iframe.style.display = 'none';

      container.appendChild(loader);
      container.appendChild(iframe);

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
    };

    document.querySelectorAll('a.a-iframe').forEach(anchor => {
      anchor.addEventListener('click', async (e) => {
        e.preventDefault();
        const a = e.currentTarget;
        const url = a.href;
        const origin = new URL(url).origin;
        const blockedOrigins = [
          'https://github.com', 'https://facebook.com', 'https://www.facebook.com',
          'https://twitter.com', 'https://www.instagram.com',
          'https://accounts.google.com', 'https://linkedin.com', 'https://www.linkedin.com'
        ];

        if (blockedOrigins.some(blocked => origin.startsWith(blocked))) {
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
  }

  initSkillPreview() {
    document.querySelectorAll('span.outlined-button').forEach(tag => {
      tag.addEventListener('mouseover', async () => {
        document.querySelectorAll('span.outlined-button').forEach(t => t.classList.remove('active'));
        tag.classList.add('active');

        const skill = tag.textContent.toLowerCase().trim();
        const container = document.getElementById('preview-box');
        container.hidden = false;
        container.className = 'preview-box';
				container.innerHTML = '';
        this.previews[skill]?.forEach(icon => {
          const wrapper = document.createElement('div');
					wrapper.className = 'tooltip-wrapper';
					const loader = Loader.getElement({id: icon});
					const img = document.createElement('img');
					wrapper.appendChild(loader);
					img.src = `${this.path}assets/images/code/${icon}.webp`;
					img.alt = icon;
					img.loading = 'lazy';
					img.style.opacity = '0';
					img.addEventListener('load', () => {
						const _loader = document.getElementById(icon);
						_loader?.remove();
						img.style.opacity = '1';
						img.style.backgroundColor = 'white';
					});
					img.addEventListener('error', () => {
						const _loader = document.getElementById(icon);
						_loader?.remove();
						img.style.display = 'none';
					});
					const tooltip = document.createElement('span');
					tooltip.className = 'tooltip-text';
					tooltip.textContent = icon.toUpperCase();
					wrapper.appendChild(img);
					wrapper.appendChild(tooltip);
					container.appendChild(wrapper);
        });
      });
    });
  }

  initHeroImage() {
    const heroImg = document.querySelector('section.hero img');
    heroImg.addEventListener('mouseover', e => {
      e.currentTarget.src = `${this.path}assets/images/favicon.webp`;
    });
    heroImg.addEventListener('mouseout', e => {
      e.currentTarget.src = `${this.path}assets/images/profile.webp`;
    });
  }

  setYear() {
    document.querySelector('#year').textContent = new Date().getFullYear();
  }

  restoreTheme() {
    const theme = this.secureStorage.get('theme');
    if (theme) setTheme(theme);
  }
}