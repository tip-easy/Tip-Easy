function requiredParam(paramName) {
  const error = new Error(`"${paramName}" parameter cannot be null or undefined.`);
  error.type = 'Application';
  throw error;
}

module.exports = requiredParam;