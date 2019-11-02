const extractTokenFromAuthHeader = require('./helpers/extract-token');
const verifyToken = require('./helpers/verify-token');

function verifyAuth(req, res, next) {
  let token;
  try {
    token = extractTokenFromAuthHeader(req.headers.authorization);
  } catch (err) {
    return res.status(403).send({ message: err.message });
  }
  try {
    const decodedTokenPayload = verifyToken(token);
    req.decodedTokenPayload = decodedTokenPayload;
  } catch (err) {
    return res.status(403).send({ message: err.message });
  }

  next();
}

module.exports = verifyAuth;
