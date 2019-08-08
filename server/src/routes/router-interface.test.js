const routerInterfaceFunction = require('./router-interface');

describe('Express Router Interface', () => {
  it('should throw an error if no arguments are provided', () => {
    expect.assertions(1);
    routerInterfaceFunction().catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    })
  });

  it('should throw an error if required arguments are not passed', () => {
    expect.assertions(1);
    routerInterfaceFunction({
      router: () => {},
      // processRequest: {}
    }).catch(err => {
      expect(err.type).toMatch(/application/i);
    })
  });
});