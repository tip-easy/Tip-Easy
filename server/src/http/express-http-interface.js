function initExpressHTTPInterface(handleRequest, express) {
  // Takes in a request object
  // Formats it into a generic HTTP object
  // Passes this request object on to a given handler function
  // then returns a response object

  return function (req, res) {
    if (req && reqContainsExpressProperties(req)) {
      const request = Object.freeze({
        method: req.method,
        path: req.path,
        headers: req.headers,
        pathParams: req.params,
        queryParams: req.query,
        body: req.body
      });

      if (typeof handleRequest === 'function') {
        handleRequest(request);
        
        // Temporarily end requests to avoid request hanging
        res.status(404).send('Nothing to see here...');
      } else {
        // throw new Error('A handler function is required to handle requests');
        // Temporarily end requests to avoid request hanging
        res.status(404).send('Nothing to see here...');
      }
    } else {
      return null;
    }
  }
}

function reqContainsExpressProperties(req) {
  return typeof (
    req.method &&
    req.path &&
    req.headers &&
    req.params &&
    req.body
  ) !== 'undefined';
}

function resContainsExpressMethods(res) {
  return typeof (
    res.set &&
    res.send &&
    res.status
  ) !== 'undefined';
}

function responseContainsHTTPProperties(response) {
  return typeof (
    response.statusCode &&
    response.headers &&
    response.data
  ) !== 'undefined';
}

module.exports = initExpressHTTPInterface;