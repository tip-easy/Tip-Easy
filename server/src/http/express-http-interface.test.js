const expressHTTPInterfaceFunction = require('./express-http-interface');
const makeInterface = require('../global-helpers/make-interface');

const express = require('express')
const expressServer = express();
const cors = require('cors');

describe('Express HTTP Interface Function', () => {
  it('should throw an error if no arguments are provided', () => {
    expect(() => expressHTTPInterfaceFunction()).toThrow(/required.+dependency/);
  });

  it('should throw an error if a required argument is not passed', () => {
    expect(() => expressHTTPInterfaceFunction({
      expressServer,
      cors, 
      jsonSupport: express.json(),
      normaliseExpressRequest: () => ({}),
      // handleRequest: () => ({})
    })).toThrow(/required.+dependency/);
  });

  it('should return a function when passed the correct arguments', () => {
    expect(typeof expressHTTPInterfaceFunction({
      expressServer,
      cors,
      jsonSupport: express.json(),
      normaliseExpressRequest: () => ({}),
      handleRequest: () => ({})
    })).toMatch(/function/);
  });
});