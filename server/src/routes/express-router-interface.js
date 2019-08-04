function initExpressRouterInterface(dataHandlers, express) {
  // takes in every request
  // routes each request to a specific endpoint
  // passes data to data processors to be validated + normalised
  // reponds with response object

  return function (request, res) {
    // TODO: Figure out express router dependency injection
    // router.use(request.path, () => { 
    //   res.send({ hello: "iiy" });
    // })
    switch (request.path) {
      case '/':
        if (request.method === 'GET') {
          const data = { hello: "random" };
          res.send(data);
        } else {
          unroutedMethodResponse(res, request);
        }
        break;
      
      case '/me':
        if (request.method === 'GET') {
          const data = { hello: "random" };
          res.send(data);
        }
        else if (request.method === 'PATCH') {
          const alteredData = { ...request.body, altered: "value" };
          res.send(alteredData);
        }
        else if (request.method === 'DELETE') {
          const alteredData = { message: "successfully deleted" };
          res.send(alteredData);
        } else {
          unroutedMethodResponse(res, request);
        }
        break;
      default:
        res.send('This route doesn\'t go anywhere');
        break;
    }

    function unroutedMethodResponse(res, request) {
      if (res && request) {
        return res.status(404).send(`404 cannot ${request.method} ${request.path}`);
      }
    }
  }
}

module.exports = initExpressRouterInterface;