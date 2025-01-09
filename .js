const mysql = require('mysql2');

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',             // Your MySQL username (default is root)
  password: '7harshul77', // Replace with your MySQL password
  database: '7harshul77'    // Replace with your database name
});

const promisePool = pool.promise(); // For Promises-based queries

// Example: Query the database
async function fetchUsers() {
  try {
    const [rows] = await promisePool.query('SELECT * FROM users');
    console.log(rows); // Print the data from users table
  } catch (err) {
    console.error('Error querying the database:', err);
  }
}

fetchUsers();
