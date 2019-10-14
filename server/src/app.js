require('dotenv').config();

// Third-party modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');

const expressServer = express();

const router = require('./router/index');

// Use third-party middleware
expressServer.use(
  helmet(),
  cors(),
  express.json(),
  cookieParser()
);

expressServer.use(
  router.authRoutes,
  router.userRoutes,
  router.transactionRoutes,
  router.searchRoutes
);

expressServer.get('/', (req, res) => {
  res.send('API Success!');
});

module.exports = expressServer;
