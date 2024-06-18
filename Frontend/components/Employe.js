import { addEmployee } from '../../Backend/servicios/api.js'; 

class EmployeeForm extends HTMLElement {
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
        input, textarea, button {
          padding: 10px;
          margin-bottom: 10px;
          font-size: 1rem;
        }
        button {
          background-color: blue;
          color: white;
          cursor: pointer;
          border: none;
        }
        button:hover {
          background-color: darkblue;
        }
      </style>
      <form id="employee-form">
        <input type="text" name="name" id="name" placeholder="Nombre" required>
        <input type="text" name="position" id="position" placeholder="Puesto" required>
        <input type="email" name="email" id="email" placeholder="Email" required>
        <input type="text" name="department" id="department" placeholder="Departamento" required>
        <input type="number" name="salary" id="salary" placeholder="Salario" required>
        <button type="submit">Agregar Empleado</button>
      </form>
    `;
    this.shadow.appendChild(template.content.cloneNode(true));
  }

  connectedCallback() {
    this.handleSubmit = (event) => {
      event.preventDefault();
      const name = this.shadow.querySelector('#name').value;
      const position = this.shadow.querySelector('#position').value;
      const email = this.shadow.querySelector('#email').value;
      const department = this.shadow.querySelector('#department').value;
      const salary = parseFloat(this.shadow.querySelector('#salary').value);

      addEmployee({ name, position, email, department, salary }) // Usa la función importada addEmployee
        .then(() => {
          alert('Empleado registrado');
          this.limpiarFormulario();
          document.querySelector('employee-table').fetchEmployees();
        })
        .catch(error => console.error('Error:', error));
    };

    this.shadow.querySelector('#employee-form').addEventListener('submit', this.handleSubmit);
  }

  disconnectedCallback() {
    this.shadow.querySelector('#employee-form').removeEventListener('submit', this.handleSubmit);
  }

  limpiarFormulario() {
    this.shadow.querySelector('#name').value = '';
    this.shadow.querySelector('#position').value = '';
    this.shadow.querySelector('#email').value = '';
    this.shadow.querySelector('#department').value = '';
    this.shadow.querySelector('#salary').value = '';
  }
}

customElements.define('employee-form', EmployeeForm);