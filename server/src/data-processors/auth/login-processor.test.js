const loginProcessorFunction = require('./login-processor');
const generateToken = require('../helpers/generate-token');
const jwt = require('jsonwebtoken');

describe('Login Processor', () => {
  it('should throw an error if no arguments are provided', async () => {
    expect.assertions(1);
    loginProcessorFunction().catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should throw an error if a required argument is not passed', async () => {
    expect.assertions(1);
    loginProcessorFunction({
      validate: () => {},
      normalise: () => {}
      // generateToken: () => {}
    }).catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    });
  });

  it('should return an object when passed the correct arguments', async () => {
    expect(typeof await loginProcessorFunction({
      validate: () => {},
      normalise: () => {},
      generateToken: () => {}
    }, {})).toMatch(/object/);
  });

  it('should return login success object when passed the correct arguments', async () => {
    process.env.AUTHSECRET = 'testingsecret';

    expect(await loginProcessorFunction({
      validate: (obj) => obj,
      normalise: (obj) => obj,
      generateToken: generateToken({ jwt })
    }, {})).toMatchObject({
      message: expect.stringMatching(/Welcome.+/),
      token: expect.stringMatching(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/),
    });

    delete process.env.AUTHSECRET;
  });
});