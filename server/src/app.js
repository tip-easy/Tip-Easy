require('dotenv').config();

// Third-party modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const expressServer = express();

const router = require('./router/index');

// Use third-party middleware
expressServer.use(
  helmet(),
  cors(),
  express.json()
);

expressServer.use(
  router.authRoutes,
  router.userRoutes,
  router.transactionRoutes
);

expressServer.get('/', (req, res) => {
  res.send('API Success!');
});

module.exports = expressServer;
