const expressHTTPInterface = require('./express-http-interface');

describe('Express HTTP Interface', () => {
  it('should return a function when invoked', () => {
    expect(typeof expressHTTPInterface()).toBe('function');
  });

  it('should not break when not passed a function', () => {
    expect(typeof expressHTTPInterface(null)).toBe('function');
    expect(typeof expressHTTPInterface({})).toBe('function');
    expect(typeof expressHTTPInterface([])).toBe('function');
  });

  it('should return null when the returned function is invoked', () => {
    expect(expressHTTPInterface()()).toEqual(null);
  });

  it('should return not break when the returned function is not passed objects', () => {
    expect(typeof expressHTTPInterface()(null)).toBe('object');
  });
});