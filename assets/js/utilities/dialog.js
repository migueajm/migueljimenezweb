export default class Dialog {
	static dialogCounter = 0;

	/**
	 * Displays a new dialog and returns a promise.
	 * 
	 * @param {Object} options - Dialog configuration options.
	 * @param {string} [options.text] - Plain text to be displayed in the dialog body.
	 * @param {string} [options.html] - HTML string to be rendered in the dialog body.
	 * @param {HTMLElement} [options.htmlElement] - A DOM element to be appended to the dialog body.
	 * @param {string} [options.title] - Title of the dialog (default is "Confirmation").
	 * @returns {Promise<boolean>} - Resolves to `true` if the user confirmed, or `false` if the dialog was closed.
	 */
	static show({ text = '', html = '', htmlElement = null, title = 'Confirm', btnText = 'Confirm', size = '', hideBtn = false } = {}) {
		const dialog = new Dialog({ text, html, htmlElement, title, btnText, size, hideBtn });
		return dialog.open();
	}

	static size(size){
		const _size = {
			sm: 'dialog-sm',
			md: 'dialog-md',
			xl: 'dialog-xl',
			fs: 'dialog-fs'
		}
		return _size[size] ?? ''
	}

	/**
	 * Displays a new dialog and returns a promise.
	 * 
	 * @param {Object} options - Dialog configuration options.
	 * @param {string} [options.text] - Plain text to be displayed in the dialog body.
	 * @param {string} [options.html] - HTML string to be rendered in the dialog body.
	 * @param {HTMLElement} [options.htmlElement] - A DOM element to be appended to the dialog body.
	 * @param {string} [options.title] - Title of the dialog (default is "Confirmation").
	 */
	constructor({ text = '', html = '', htmlElement = null, title = 'Confirm', btnText = 'Confirm', size = '', hideBtn = false } = {}) {
		this.dialogId = `dialog-${++Dialog.dialogCounter}`;
		this.text = text;
		this.html = html;
		this.htmlElement = htmlElement;
		this.title = title;
		this.btnText = btnText;
		this.size = size
		this.hideBtn = hideBtn
		this.dialogElement = null;
		this._resolve = null;
	}

	open() {
		return new Promise((resolve) => {
			this._resolve = resolve;
			this._createDialog();
			document.body.appendChild(this.dialogElement);
			requestAnimationFrame(() => {
				this.dialogElement.classList.add('open');
			});
		});
	}

	_createDialog() {
		const dialog = document.createElement('div');
		dialog.classList.add('custom-dialog');
		dialog.id = this.dialogId;

		dialog.innerHTML = `
      <div class="dialog-content ${this.size}">
        <div class="dialog-header">
          <span class="dialog-title">${this.title}</span>
          <button class="dialog-close" aria-label="Cerrar">&times;</button>
        </div>
        <div class="dialog-body"></div>
        <div class="dialog-footer">
          <button class="dialog-confirm" ${this.hideBtn ? 'hidden' : 'else'}>${this.btnText}</button>
        </div>
      </div>
    `;

		const body = dialog.querySelector('.dialog-body');
		if (this.htmlElement instanceof HTMLElement) {
			body.appendChild(this.htmlElement);
		} else if (this.html) {
			body.innerHTML = this.html;
		} else if (this.text) {
			body.textContent = this.text;
		}

		dialog.querySelector('.dialog-close').addEventListener('click', () => this._close(false));
		dialog.querySelector('.dialog-confirm').addEventListener('click', () => this._close(true));

		this.dialogElement = dialog;
	}

	_close(result) {
		this.dialogElement.classList.remove('open');
		this.dialogElement.classList.add('closing');

		this.dialogElement.addEventListener('transitionend', () => {
			this.dialogElement.remove();
		}, { once: true });

		this._resolve(result);
	}
}