require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const initExpressHTTPInterface = require('./http/express-http-interface');
const initExpressRouterInterface = require('./routes/express-router-interface');

app.use(helmet());
app.use(express.json());
app.use(cors());

// const dataProcessors = getDataProcessors();
const router = initExpressRouterInterface(null, app);
const HTTPInterface = initExpressHTTPInterface(router, app);

app.use(HTTPInterface);

module.exports = app;
