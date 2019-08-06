const requiredDependency = require('../global-helpers/required-dependency');

function expressHTTPInterfaceFunction({
  expressServer = requiredDependency('expressServer'),
  cors = requiredDependency('cors'),
  jsonSupport = requiredDependency('jsonSupport'),
  normaliseExpressRequest = requiredDependency('normaliseExpressRequest'),
  handleRequest = requiredDependency('handleRequest'),
  ...optionalDependencies } = {}) {
 
  expressServer.use(cors());
  expressServer.use(jsonSupport);

  const { helmet } = optionalDependencies;

  // Optional dependencies
  helmet ? expressServer.use(helmet()) : null;

  // Normalise all requests + pass them to handler
  expressServer.use(function(req, res) {
    const request = normaliseExpressRequest(req);

    handleRequest({ request, res });
  });
  
  return expressServer;
};

module.exports = expressHTTPInterfaceFunction;