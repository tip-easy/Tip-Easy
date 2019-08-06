const expressRouterInterface = require('./express-router-interface');

describe('Express Router Interface', () => {
  it('should return a function when invoked', () => {
    expect(typeof expressRouterInterface()).toBe('function');
  });

  it('should not break when not passed a function', () => {
    expect(typeof expressRouterInterface(null)).toBe('function');
    expect(typeof expressRouterInterface({})).toBe('function');
    expect(typeof expressRouterInterface([])).toBe('function');
  });
});