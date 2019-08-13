const jwt = require('jsonwebtoken');
const makeVerifyAuth = require('./verify-auth');

describe('Verify Auth Function', () => {
  beforeEach(() => {
    process.env.AUTHSECRET = 'testingsecret';
  });

  it('should throw an error if not passed any arguments', () => {
    expect(() => makeVerifyAuth()).toThrow(/required.+dependency/);
  });

  it('should throw an error if jwt param does not have appropriate methods', () => {
    expect(() => makeVerifyAuth({
      jwt: []
    })).toThrow(/required.+dependency/);
    expect(() => makeVerifyAuth({
      jwt: () => {}
    })).toThrow(/required.+dependency/);
  });

  it('should throw an error if AUTHSECRET environment variable is undefined', () => {
    delete process.env.AUTHSECRET;
    
    if (!process.env.AUTHSECRET) {
      expect(() => makeVerifyAuth({ jwt })('token')).toThrow(/AUTHSECRET/);
    }
  });

  it('should throw an error if no token is provided', () => {
    expect(() => makeVerifyAuth({ jwt })()).toThrow(/token.+required/);
  });

  it('should throw an error if an invalid token is provided', () => {
    const invalidToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.AVf-baEv_HW1YLY7Z71bO40NV17eghX48VEpGHSVWRX';

    expect(() => makeVerifyAuth({ jwt })(invalidToken)).toThrow(/authorisation.+endpoint/);
  });

  it('should throw an error if a token of invalid type is provided', () => {
    expect(() => makeVerifyAuth({ jwt })(['token'])).toThrow(/token.+type.+string/);
    expect(() => makeVerifyAuth({ jwt })(null)).toThrow(/token.+type.+string/);
  });

  it('should return an object with appropriate properties when a valid token is provided', () => {
    // Token generated on jwt.io using a secret of "testingsecret"
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.AVf-baEv_HW1YLY7Z71bO40NV17eghX48VEpKBYPPHU';

    const functionOutput = makeVerifyAuth({ jwt })(token);
    
    expect(functionOutput).toHaveProperty(['message']);
    expect(functionOutput).toHaveProperty(['body', 'iat']);
    expect(functionOutput).toHaveProperty(['body', 'sub']);
    expect(functionOutput).toHaveProperty(['body', 'name']);
  });

  it('should return an immutable object', () => {
    // Token generated on jwt.io using a secret of "testingsecret"
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.AVf-baEv_HW1YLY7Z71bO40NV17eghX48VEpKBYPPHU';

    const functionOutput = makeVerifyAuth({ jwt })(token);
    const originalOutputObject = { ...functionOutput };

    functionOutput.body = 'Altered';
    functionOutput.message = 'Altered';

    expect(functionOutput).toMatchObject(originalOutputObject);
  });
});