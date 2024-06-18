import { addProduct } from '../../Backend/servicios/api.js'; 

class ProductForm extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
    const template = document.createElement('template');
    template.innerHTML = `
      <style>
        :host {
          display: block;
        }
        form {
          max-width: 300px;
          display: flex;
          flex-direction: column;
        }
        input, button {
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1rem;
        }
        button {
          background-color: green;
          color: white;
          cursor: pointer;
          border: none;
        }
        button:hover {
          background-color: darkgreen;
          color: white;
        }
      </style>
      <form id="product-form">
        <input type="text" name="name" id="name" placeholder="Nombre" required>
        <input type="number" name="price" id="price" placeholder="Precio" required>
        <input type="text" name="category" id="category" placeholder="Categoría" required>
        <textarea name="description" id="description" placeholder="Descripción" required></textarea>
        <button type="submit">Agregar Producto</button>
      </form>
    `;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.handleSubmit = (event) => {
      event.preventDefault();
      const name = this.shadow.querySelector('#name').value;
      const price = parseFloat(this.shadow.querySelector('#price').value);
      const category = this.shadow.querySelector('#category').value;
      const description = this.shadow.querySelector('#description').value;

      addProduct({ name, price, category, description }) 
        .then(() => {
          alert('Producto registrado');
          this.limpiarFormulario();
          document.querySelector('product-table').fetchProducts(); 
        })
        .catch(error => console.error('Error:', error));
    };

    this.shadow.querySelector('#product-form').addEventListener('submit', this.handleSubmit);
  }

  disconnectedCallback() {
    this.shadow.querySelector('#product-form').removeEventListener('submit', this.handleSubmit);
  }

  limpiarFormulario() {
    this.shadow.querySelector('#name').value = '';
    this.shadow.querySelector('#price').value = '';
    this.shadow.querySelector('#category').value = '';
    this.shadow.querySelector('#description').value = '';
  }
}

customElements.define('product-form', ProductForm);