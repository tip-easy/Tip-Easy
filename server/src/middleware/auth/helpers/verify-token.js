const jwt = require('jsonwebtoken');

function verifyToken(token) {
  let payload;

  if (!process.env.AUTHSECRET) {
    throw Error('An "AUTHSECRET" environment variable is required.');
  }

  jwt.verify(token, process.env.AUTHSECRET, (err, decodedTokenPayload) => {
    if (err) {
      console.log(err);
      throw Error(
        'Invalid token. You need authorisation to access this endpoint.'
      );
    } else {
      payload = decodedTokenPayload;
    }
  });

  return payload;
}

module.exports = verifyToken;
