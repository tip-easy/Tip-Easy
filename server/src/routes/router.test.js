const router = require('./router');

describe('Router', () => {
  it('should throw an error if no arguments are provided', () => {
    expect.assertions(1);
    router().catch(err => {
      expect(err.type).toMatch(/application/i);
    })
  });

  it('should throw an error if n required arguments are not passed', () => {
    expect.assertions(1);
    router({
      httpRequest: {},
      // processRequest: {}
    }).catch(err => {
      expect(err.type).toMatch(/application/i);
    });
  });

  xit('should return a function when correct areguments are passed', () => {
    expect.assertions(1);

    router({
      httpRequest: {
        method: 'GET',
        path: '/',
        headers: {},
        queryParams: {},
        pathParams: {},
        body: {}
      },
      processRequest: () => {},
      res
    }).then(returned => {
      expect(typeof returned).toBe('function');
    });
  });
});