require('dotenv').config();

// Third-party modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const expressServer = express();

expressServer.use(helmet());
expressServer.use(cors());
expressServer.use(express.json());

expressServer.get('/', (req, res) => {
  return res.send({ message: 'API Success!' });
});

module.exports = expressServer;
