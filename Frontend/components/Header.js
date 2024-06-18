class AppHeader extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        header {
          background-color: #333;
          color: white;
          text-align: center;
          padding: 1rem;
        }
        nav a {
          color: white;
          margin: 0 10px;
          text-decoration: none;
        }
      </style>
      <header>
        <h1>Proyecto Final – Parcial 1</h1>
        <nav>
          <a href="index.html">Inicio</a>
          <a href="FormularioEmp.html">Ingresa Empleado</a>
           <a href="FormularioPro.html">Ingresa Producto</a>
            <a href="TablaEmp.html">Empleados</a>
             <a href="TablaPro.html">Productos</a>
        </nav>
      </header>
    `;
  }
}
customElements.define('app-header', AppHeader);