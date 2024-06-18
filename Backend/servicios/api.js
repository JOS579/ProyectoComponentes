export function getProducts() {
  return fetch('http://localhost:3000/products').then(response => response.json());
}

export function getEmployees() {
  return fetch('http://localhost:3000/employees').then(response => response.json());
}

export function addProduct(product) {
  return fetch('http://localhost:3000/products', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(product)
  });
}

export function addEmployee(employee) {
  return fetch('http://localhost:3000/employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee)
  });
}


import '../../Frontend/components/Header.js';
import '../../Frontend/components/Footer.js';
import '../../Frontend/components/ProducE.js';
import '../../Frontend/components/Employe.js';
import '../../Frontend/components/MostrarPE.js';
import '../../Frontend/components/MostrarTabla.js';
