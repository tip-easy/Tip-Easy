require('dotenv').config();

// Third-party modules
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const expressServer = express();

// Global helpers
const makeInterface = require('./global-helpers/make-interface');

// HTTP Helpers
const normaliseExpressRequest = require('./http/helpers/normalise-express-request');

// Interface Functions
const expressHTTPInterfaceFunction = require('./http/express-http-interface');

const router = () => {};

const expressHTTPInterface = makeInterface({ 
    interfaceFunction: expressHTTPInterfaceFunction,
    expressServer,
    cors,
    helmet,
    jsonSupport: express.json(),
    normaliseExpressRequest,
    handleRequest: router, 
  }, 
  [
    'expressServer',
    'cors',
    'jsonSupport',
    'normaliseExpressRequest',
    'handleRequest'
]);

const app = expressHTTPInterface();

module.exports = app;
