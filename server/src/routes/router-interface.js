const requiredParam = require('../global-helpers/required-parameter');
const requiredDependency = require('../global-helpers/required-dependency');

async function routerInterfaceFunction({
  router = requiredDependency('router'),
  processors = requiredParam('processors'), 
  ...optionalDependencies 
} = {}, {
  httpRequest = requiredParam('httpRequest'),
  ...additionalParams
} = {}) {
  // TODO: Remove reliance on Express' res
  const { res } = additionalParams || {};
  
  try {
    await router({ httpRequest, res, processors });
    // TODO: Return reponse object received from router to HTTP Interface from
  }
  catch(error) {  
    // handle application errors vs request errors
    if (error.type && error.type.match(/application/i)) {
      // TODO: Return error object to HTTP Interface rather than using res
      // HTTP Interface will handle all responses in future
      res.status(500).send({ message: error.message });
      throw error;
    }
    else if (error.type && error.type.match(/request/i)) {
      res.status(500).send({ message: error.message });
    }
  }
}

module.exports = routerInterfaceFunction;