const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'db',
  database: 'postgres',
  password: '1234567',
  port: 5432,
})

pool.query('CREATE TABLE IF NOT EXISTS users (id serial PRIMARY KEY,name VARCHAR(255));', (error, results) => {
  if (error) {
    console.log(error);
  }
})


const getUsers = (request, response) => {
  pool.query('SELECT * FROM users ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

const postUser = (request, response) => {
  pool.query("INSERT INTO users (name) VALUES ('yash')", (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

module.exports = {getUsers,postUser}
