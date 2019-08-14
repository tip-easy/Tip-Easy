module.exports = function throwError(message, type) {
  // TODO: Create custom error types by extending Error class
  // TODO: Point to correct source of error in the error stack
  const error = new Error(message);
  error.type = type || 'application';
  throw error;
};