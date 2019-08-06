const routerInterfaceFunction = require('./router-interface');

describe('Express Router Interface', () => {
  it('should throw an error if no arguments are provided', () => {
    routerInterfaceFunction().catch(err => {
      expect(err.message).toMatch(/required.+dependency/);
    })
  });

  it('should throw an error if a required arguments are not passed', () => {
    routerInterfaceFunction({
      router: () => {},
      // processRequest: {}
    }).catch(err => {
      expect(err.type).toMatch(/application/i);
    })
  });
});