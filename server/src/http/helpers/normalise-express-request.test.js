const normaliseExpressRequest = require('./normalise-express-request');

describe('Normalise Express Request Function', () => {
  it('should throw an error if no arguments are passed', () => {
    expect(() => normaliseExpressRequest()).toThrow(/express.+properties.+required/i);
  });

  it('should throw an error if a request without the required properties is passed as an argument', () => {
    expect(
      () => normaliseExpressRequest({
        method: '',
        path: {},
        headers: {},
        params: {},
        body: {},
        // query: {}
      })
    ).toThrow(/express.+properties.+required/i);
  });

  it('should return an object with specified properties', () => {
    const request = normaliseExpressRequest({
      method: '',
      path: {},
      headers: {},
      params: {},
      body: {},
      query: {}
    });

    expect(request)
      .toMatchObject({
        method: '',
        path: {},
        headers: {},
        pathParams: {},
        queryParams: {},
        body: {}
      })
  });

  it('should return an immutable object', () => {
    const request = normaliseExpressRequest({
      method: '',
      path: {},
      headers: {},
      params: {},
      body: {},
      query: {}
    });

    request.method = 'Altered';
    request.pathParams = 'Altered';
    
    expect(request)
      .toMatchObject({
        method: '',
        path: {},
        headers: {},
        pathParams: {},
        queryParams: {},
        body: {}
      });
  });
});