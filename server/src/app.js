require('dotenv').config();

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

const initExpressHTTPInterface = require('./http/express-http-interface');

app.use(helmet());
app.use(express.json());
app.use(cors());

const router = () => {};

const expressHTTPInterface = initExpressHTTPInterface(router);

app.use(expressHTTPInterface);

module.exports = app;
