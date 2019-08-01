require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.status(200).send({ message: 'Server\'s Alive' });
})

module.exports = app;
