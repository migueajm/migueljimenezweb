export class Loader {
	static loaderId = 'app-loader-backdrop';

	static show(message = '...') {
		document.body.style.pointerEvents = 'none';
		if (!document.getElementById(this.loaderId)) {
			const backdrop = document.createElement('div');
			backdrop.id = this.loaderId;
			backdrop.className = 'app-loader-backdrop';
			backdrop.appendChild(Loader.getElement({message}));
			document.body.appendChild(backdrop);
			return;
		}
		const backdrop = document.getElementById(this.loaderId);
		backdrop.style.display = 'flex';
		const messageDiv = backdrop.querySelector('.app-loader-message');
		messageDiv.textContent = message;
	}

	static hide() {
		const backdrop = document.getElementById(this.loaderId);
		if (backdrop) {
			backdrop.style.display = 'none';
		}
		document.body.style.pointerEvents = 'auto';
	}

	static getElement({message = '', id = null}) {
		const div = document.createElement('div');
		if(id){
			div.id = id;
		}
		div.className = 'app-loader';
		div.innerHTML = `<div class="app-loader-spinner"></div><div class="app-loader-message">${message}</div>`;
		return div;
	}
}