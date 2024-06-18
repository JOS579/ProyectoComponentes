// frontend/components/employee-table.js
import { getEmployees } from '../../Backend/servicios/api.js';

class EmployeeTable extends HTMLElement {
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
        .action-buttons {
          display: flex;
          justify-content: space-around;
        }
      </style>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Puesto</th>
            <th>Email</th>
            <th>Salario</th>
         
          </tr>
        </thead>
        <tbody id="employee-list"></tbody>
      </table>
    `;
    this.fetchEmployees();
  }

  fetchEmployees() {
    getEmployees()
      .then(employees => {
        const employeeList = this.shadowRoot.querySelector('#employee-list');
        employeeList.innerHTML = employees.map(employee => `
          <tr>
            <td>${employee.id}</td>
            <td>${employee.name}</td>
            <td>${employee.position}</td>
            <td>${employee.email}</td>
            <td>${employee.salary}</td>
        
          </tr>
        `).join('');
      })
      .catch(error => console.error('Error fetching employees:', error));
  }
}

customElements.define('employee-table', EmployeeTable);