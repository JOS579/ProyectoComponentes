class inicio_bienvenida extends HTMLElement {
    constructor() {
      super();
      const shadow = this.attachShadow({ mode: 'open' });
      shadow.innerHTML = `
        <style>
       
          .container {
            max-width: 800px;
            margin: 0 auto; /* Centra horizontalmente */
            padding: 20px;
            font-family: Arial, sans-serif;
            box-sizing: border-box; /* Asegura que padding no afecte el ancho total */
          }
          h1, p, .integrantes ul {
            text-align: center;
            color: #333;
          }
          p {
            margin-bottom: 20px;
          }
          .integrantes {
            margin-top: 20px;
          }
          .integrantes ul {
            list-style-type: none;
            padding: 0;
          }
          .integrantes ul li {
            margin-bottom: 5px;
          }
        </style>
        <div class="container">
          <h1>Universidad de las Fuerzas Armadas ESPE</h1>
          <p>Programación Integrativa de Componentes - Taller 1</p>
          <div class="integrantes">
            <h2>Integrantes:</h2>
            <ul>
              <li>Annthony Chávez</li>
              <li>Josseph Cedeño</li>
            </ul>
          </div>
        </div>
      `;
    }
  }
  
customElements.define('inicio-bienvenida', inicio_bienvenida);