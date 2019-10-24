function extractTokenFromAuthHeader(authHeader) {
  if (authHeader) {
    if (typeof authHeader !== 'string') {
      throw new TypeError('The provided token must be of type string');
    }
  
    if(authHeader.includes('Bearer ')) {
      const token = authHeader.split(' ')[1];
      return token;
    } else {
      throw new Error('The provided token must be formatted according to specification');
    }
  } else {
    // If no authorization header is present
    throw new Error('Authorisation header is not present');
  }
}

module.exports = extractTokenFromAuthHeader;