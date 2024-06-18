// frontend/components/product-table.js
import { getProducts } from '../../Backend/servicios/api.js'; 

class ProductTable extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 8px;
        }
        th {
          background-color: #f2f2f2;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Categoría</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody id="product-list"></tbody>
      </table>
    `;
    this.fetchProducts();
  }

  fetchProducts() {
    getProducts()
      .then(products => {
        const productList = this.shadowRoot.querySelector('#product-list');
        productList.innerHTML = products.map(product => `
          <tr>
            <td>${product.id}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.category}</td>
            <td>${product.description}</td>
          </tr>
        `).join('');
      })
      .catch(error => console.error('Error fetching products:', error));
  }
}

customElements.define('product-table', ProductTable);