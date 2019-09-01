// TODO: Change the message to be more suitable for any type of param not just named props
function requiredParam(paramName) {
  // TODO: Create custom error types by extending Error class
  const error = new Error(`"${paramName}" parameter cannot be null or undefined.`);
  error.type = 'Application';
  throw error;
}

module.exports = requiredParam;