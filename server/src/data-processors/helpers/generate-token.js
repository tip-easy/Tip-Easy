const requiredDependency = require('../../global-helpers/required-dependency');
const throwError = require('../../global-helpers/throw-error');
const getType = require('../../global-helpers/get-type');
const jwt = require('jsonwebtoken');

function generateToken({ userId } = {}) {
  if (
    userId &&
    (getType(userId) === 'string' || getType(userId) === 'number')
  ) {
    // TODO: Add user roles in token payload
    const payload = {};
    const options = { expiresIn: '2 days', subject: userId };
    const token = jwt.sign(payload, process.env.AUTHSECRET, options);
    return token;
  } else if (getType(userId) === 'undefined') {
    throwError('A user ID is required to generate a new token.', 'application');
  } else if (getType(userId) !== 'string' || getType(userId) !== 'number') {
    throwError(
      'A user ID of type "string" or "number" is required to generate a new token.',
      'application'
    );
  }
}

module.exports = generateToken;