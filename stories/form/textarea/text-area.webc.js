customElements.define('text-area', class extends HTMLElement {
  constructor() {
    super();

    this.textarea = this.querySelector('.form-textarea');
    this.item = this.querySelector('.form-item');

    if (this.textarea && this.item && this.textarea.hasAttribute('maxlength')) {
      this.maxlength = this.textarea.getAttribute('maxlength');
      this.counter = document.createElement('span');
      this.counter.className = 'form-textarea-counter';
      this.item.appendChild(this.counter);
      this.updateCounter();

      this.addEventListener('keyup', this.handleEvent);
    }
  }

  handleEvent(e) {
    if (e.type === 'keyup' && e.target.closest('.form-textarea')) {
      this.updateCounter();
    }
  }

  updateCounter() {
    this.counter.textContent = `${this.textarea.value.length} / ${this.maxlength}`;
  }
});