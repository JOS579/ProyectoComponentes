class AppFooter extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
          footer {
            background-color: #333;
            color: white;
            text-align: center;
            padding: 1rem;
            position: fixed;
            width: 100%;
            bottom: 0;
          }
        </style>
        <footer>
          <p>© 2024 Universidad de las Fuerzas Armadas ESPE</p>
        </footer>
      `;
    }
  }
  customElements.define('app-footer', AppFooter);
  