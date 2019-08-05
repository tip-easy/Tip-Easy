function expressHTTPInterfaceFunction({
  expressServer,
  cors,
  jsonSupport,
  normaliseExpressRequest,
  handleRequest,
  ...rest } = {}) {

  const requiredParamsExist = (
    expressServer && 
    cors && 
    jsonSupport && 
    normaliseExpressRequest && 
    handleRequest
  );

  if (!requiredParamsExist) {
    throw new Error('expressHTTPInterfaceFunction: Passing this function through makeInterface is required to inject required dependencies.');
  }
  
  expressServer.use(cors());
  expressServer.use(jsonSupport);

  // optional dependencies
  rest.helmet ? expressServer.use(rest.helmet()) : null;

  // Normalise all requests + pass them to handler
  expressServer.use(function (req, res) {
    const request = normaliseExpressRequest(req);

    handleRequest(request);
    
    res.send(request.body);
  });
  
  return expressServer;
};

module.exports = expressHTTPInterfaceFunction;