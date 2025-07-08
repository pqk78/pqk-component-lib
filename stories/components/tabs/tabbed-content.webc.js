customElements.define('tabbed-content', class extends HTMLElement {
  connectedCallback() {
    console.log('connecting', this.isBuilt);
    if (this.isBuilt) {
      return;
    }
    const accordions = this.querySelectorAll('.accordion');
    const tabs = document.createElement('div');
    tabs.classList.add('tabs');
    tabs.classList.add('container');
    this.appendChild(tabs);
    const list = document.createElement('div');
    list.classList.add('tab-list');
    list.setAttribute('role', 'tablist');
    tabs.appendChild(list);
    const delta = this.getAttribute('delta') || '0';

    accordions.forEach((accordion, index) => {
      accordion.classList.add('tab-accordion');
      let tab = document.createElement('button');
      let panel = document.createElement('div');
      let panelInner = document.createElement('div');
      tab.classList.add('tab');
      panel.classList.add('tab-panel');
      panelInner.classList.add('tab-panel-inner');
      if (index === 0) {
        tab.classList.add('selected');
        tab.setAttribute('aria-selected', true);
        panel.classList.add('current');
      }
      tab.id = `tab-${delta}-${index}`;
      panel.id = `tab-panel-${delta}-${index}`;
      tab.setAttribute('role', 'tab');
      tab.setAttribute('aria-controls', panel.id);
      panel.setAttribute('tabindex', 0);
      tab.textContent = accordion.querySelector('.accordion-label').textContent;
      panelInner.innerHTML = accordion.querySelector('.accordion-body').innerHTML;

      list.appendChild(tab);
      tabs.appendChild(panel);
      panel.appendChild(panelInner);
    });

    this.addEventListener('click', this);
    this.addEventListener('keyup', this);
    this.isBuilt = true;
  }

  handleEvent(e) {
    if (e.type === 'click' && e.target.classList.contains('tab')) {
      this.onClick(e);
    }

    if (e.type === 'keyup' && e.target.classList.contains('tab')) {
      this.onKeyUp(e);
    }
  }

  onClick(e) {
    const tab = e.target;
    if (tab.classList.contains('selected')) {
      return;
    }
    else {
      const currentTab = this.querySelector('.selected');
      if (currentTab != null) {
        currentTab.setAttribute('aria-selected', false);
        currentTab.setAttribute('tabindex', -1);
        currentTab.classList.remove('selected');
        let currentPanel = this.querySelector(`#${currentTab.getAttribute('aria-controls')}`);
        currentPanel.classList.remove('current');
      }
      tab.setAttribute('aria-selected', true);
      tab.setAttribute('tabindex', 0);
      tab.classList.add('selected');
      let newPanel = this.querySelector(`#${tab.getAttribute('aria-controls')}`);
      newPanel.classList.add('current');
    }
  }

  onKeyUp(e) {
    const tabs = Array.from(this.querySelectorAll('.tab'));
    const tab = e.target;
    const index = tabs.indexOf(tab);
    let newTab;

    if (e.key == 'ArrowRight') {
      if (index >= tabs.length - 1) {
        newTab = tabs[0];
      }
      else {
        newTab = tabs[index + 1];
      }
    }
    else if (e.key == 'ArrowLeft') {
      if (index == 0) {
        newTab = tabs[tabs.length - 1];
      }
      else {
        newTab = tabs[index - 1];
      }
    }
    else {
      return;
    }

    tab.setAttribute('aria-selected', false);
    tab.setAttribute('tabindex', -1);
    tab.classList.remove('selected');
    const currentPanel = document.querySelector(`#${tab.getAttribute('aria-controls')}`);
    currentPanel.classList.remove('current');

    newTab.setAttribute('aria-selected', true);
    newTab.setAttribute('tabindex', 0);
    newTab.classList.add('selected');
    newTab.focus();
    const newPanel = document.querySelector(`#${newTab.getAttribute('aria-controls')}`);
    newPanel.classList.add('current');
  }
});