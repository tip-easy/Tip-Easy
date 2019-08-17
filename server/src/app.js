require('dotenv').config();

// Third-party modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const expressServer = express();

// Global helpers
const makeInterface = require('./global-helpers/make-interface');

// Local Helpers
const normaliseExpressRequest = require('./http/helpers/normalise-express-request');
const router = require('./routes/router');

// Interface Functions
const expressHTTPInterfaceFunction = require('./http/express-http-interface');
const routerInterfaceFunction = require('./routes/router-interface');
const processors = require('./data-processors/index');

const routerInterface = makeInterface({
  interfaceFunction: routerInterfaceFunction,
  router,
  processors
});

const expressHTTPInterface = makeInterface({ 
  interfaceFunction: expressHTTPInterfaceFunction,
  expressServer,
  cors,
  helmet,
  jsonSupport: express.json(),
  normaliseExpressRequest,
  handleRequest: routerInterface, 
});

const app = expressHTTPInterface();

module.exports = app;
