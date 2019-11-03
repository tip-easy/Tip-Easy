const generateToken = require('./generate-token');
const jwt = require('jsonwebtoken');

xdescribe('Generate Token Function', () => {
  it('should throw an error if no arguments are provided', () => {
    expect(() => generateToken()).toThrow(/required.+dependency/);
  });

  it('should throw an error if AUTHSECRET environment variable is not present', () => {
    expect(() => generateToken({ jwt })).toThrow(/AUTHSECRET.+required/);
  });

  it('should return a function if correct requirements are present', () => {
    process.env.AUTHSECRET = 'testingsecret';

    expect(typeof generateToken({ jwt })).toBe('function');

    delete process.env.AUTHSECRET
  });

  it('should throw an error if no arguments are provided to the returned function', () => {
    process.env.AUTHSECRET = 'testingsecret';

    const returned = generateToken({ jwt });

    expect(() => returned()).toThrow(/user id.+required/i);

    delete process.env.AUTHSECRET
  });

  it('should throw an error if userID argument provided to the returned function is not of type string or number', () => {
    process.env.AUTHSECRET = 'testingsecret';

    const returned = generateToken({ jwt });

    expect(() => returned({ userId: [] })).toThrow(/user id.+type/i);
    expect(() => returned({ userId: {} })).toThrow(/user id.+type/i);

    delete process.env.AUTHSECRET
  });

  it('should return a token when correct arguments are provided', () => {
    process.env.AUTHSECRET = 'testingsecret';

    const userId = '0f9d1d53-03ca-4817-8a32-43e25fbfc255';
    const token = generateToken({ jwt })({ userId });

    expect(token).toMatch(/^[A-Za-z0-9-_=]+\.[A-Za-z0-9-_=]+\.?[A-Za-z0-9-_.+/=]*$/);

    delete process.env.AUTHSECRET
  });
});