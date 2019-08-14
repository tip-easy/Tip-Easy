function normaliseExpressRequest(request = {}) {
  const hasRequiredProps = requestContainsExpressProperties(request);
  
  if (request && hasRequiredProps) {
    // Returns immutable request object
    return Object.freeze({
      method: request.method,
      path: request.path,
      headers: request.headers,
      pathParams: request.params,
      queryParams: request.query,
      body: request.body
    });
  } else {
    // TODO: Import/use custom error type
    throw new Error('normaliseExpressRequest: An object containing Express request object properties is required');
  }

  function requestContainsExpressProperties(request) {
    return (
      'method' in request &&
      'path' in request &&
      'headers' in request &&
      'params' in request &&
      'query' in request &&
      'body' in request
    );
  }
}

module.exports = normaliseExpressRequest;