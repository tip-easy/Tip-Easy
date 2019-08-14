const requiredDependency = require('../../global-helpers/required-dependency');
const throwError = require('../../global-helpers/throw-error');

function makeVerifyAuth({ jwt = requiredDependency('jwt') } = {}) {
  const jwtParamHasVerifyMethod = 'verify' in jwt;
  if (!jwtParamHasVerifyMethod) {
    requiredDependency('jwt');
  } 
  else if (!process.env.AUTHSECRET) {
    throwError('An "AUTHSECRET" environment variable is required', 'application');
  } else {
    return function (token) {
      let message, tokenBody;
  
      if (token && typeof token === 'string') {
        jwt.verify(token, process.env.AUTHSECRET, (err, decodedTokenBody) => {
          if (err) {
            throwError('You need authorisation to access this endpoint.', 'authorisation');
          } else {
            message = "Successfully authenticated.";
            tokenBody = decodedTokenBody;
          }
        });
  
        return Object.freeze({
          message,
          body: tokenBody
        });
      }
      else if(typeof token === 'undefined') {
        throwError('A token is required to verify authorisation.', 'application');
      }
      else if(typeof token !== 'string') {
        throwError('A token of type "string" is required to verify authorisation.', 'application');
      } else {
        throwError('You need authorisation to access this endpoint.', 'authorisation');
      }
    };
  }
};

module.exports = makeVerifyAuth;