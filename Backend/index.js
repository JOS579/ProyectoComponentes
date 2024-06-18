import express from 'express';
import bodyParser from 'body-parser';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const port = 3000;

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'proyecto_1parcial'
});

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database');
});

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Welcome to the home page!');
});

app.get('/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/products', (req, res) => {
  const { name, price, category, description, stock } = req.body;
  const query = 'INSERT INTO products (name, price, category, description) VALUES (?, ?, ?, ?)';
  db.query(query, [name, price, category, description, stock], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});

app.get('/employees', (req, res) => {
  db.query('SELECT * FROM employees', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/employees', (req, res) => {
  const { name, position, email, salary, hire_date } = req.body;
  const query = 'INSERT INTO employees (name, position, email, salary) VALUES (?, ?, ?, ?)';
  db.query(query, [name, position, email, salary, hire_date], (err, result) => {
    if (err) throw err;
    res.status(201).json({ id: result.insertId });
  });
});


app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
