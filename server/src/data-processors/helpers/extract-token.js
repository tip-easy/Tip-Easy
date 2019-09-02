const getType = require('../../global-helpers/get-type');
const throwError = require('../../global-helpers/throw-error');

function extractTokenFromAuthHeader(authHeader) {
  if (authHeader) {
    if (getType(authHeader) !== 'string') {
      throwError(`The provided token must be of type string`, 'application');
    }
  
    if(authHeader.includes('Bearer ')) {
      const token = authHeader.split(' ')[1];
      return token;
    } else {
      throwError(`The provided token must be formatted according to specification`, 'application');
    }
  } else {
    // If no authorization header is present
    return false;
  }
}

module.exports = extractTokenFromAuthHeader;