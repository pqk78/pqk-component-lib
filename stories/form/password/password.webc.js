customElements.define('input-password', class extends HTMLElement{
  constructor() {
    super();

    this.item = this.querySelector('.form-item');
    this.input = this.querySelector('.form-password');
    this.createButton();
    this.addEventListener('click', this.handleEvent);
  }

  createButton() {
    this.button = document.createElement('button');
    this.hidePassword();
    this.item.appendChild(this.button);
  }

  handleEvent(e) {
    if (e.type === 'click') {
      if (e.target.closest('.hide-password')) {
        this.hidePassword();
      }
      else if (e.target.closest('.show-password')) {
        this.showPassword();
      }
    }
  }

  hidePassword() {
    this.input.setAttribute('type', 'password');
    this.button.className = 'show-password';
    this.button.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M3.26 11.602C3.942 8.327 6.793 6 10 6s6.057 2.327 6.74 5.602a.5.5 0 0 0 .98-.204C16.943 7.673 13.693 5 10 5s-6.943 2.673-7.72 6.398a.5.5 0 0 0 .98.204M10 8a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-2.5 3.5a2.5 2.5 0 1 1 5 0a2.5 2.5 0 0 1-5 0"/></svg>`;
    this.button.setAttribute('aria-label', 'Show password');
  }

  showPassword() {
    this.input.setAttribute('type', 'text');
    this.button.className = 'hide-password';
    this.button.innerHTML = `<svg class="icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><path fill="currentColor" d="M2.854 2.146a.5.5 0 1 0-.708.708l3.5 3.498a8.1 8.1 0 0 0-3.366 5.046a.5.5 0 1 0 .98.204a7.1 7.1 0 0 1 3.107-4.528L7.953 8.66a3.5 3.5 0 1 0 4.886 4.886l4.307 4.308a.5.5 0 0 0 .708-.708zm9.265 10.68A2.5 2.5 0 1 1 8.673 9.38zm-1.995-4.824l3.374 3.374a3.5 3.5 0 0 0-3.374-3.374M10 6c-.57 0-1.129.074-1.666.213l-.803-.803A7.7 7.7 0 0 1 10 5c3.693 0 6.942 2.673 7.72 6.398a.5.5 0 0 1-.98.204C16.058 8.327 13.207 6 10 6"/></svg>`;
    this.button.setAttribute('aria-label', 'Hide password');
  }
});