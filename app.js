const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const db = require('./queries');

const port = 3009; // Or any other port you prefer


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
  res.json({ info: 'lkadjhflksdjNode.js, Express, and Postgres API' })
});

app.listen(port, () => {
  console.log(`Server listening port ${port}`);
});

app.get('/users', db.getUsers)
app.get('/addUser', db.postUser)

