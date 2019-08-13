module.exports = function throwError(message, type) {
  const error = new Error(message);
  error.type = type || 'application';
  throw error;
};