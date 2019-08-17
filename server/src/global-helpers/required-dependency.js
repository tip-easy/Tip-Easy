function requiredDependency(paramName) {
  // TODO: Create custom error types by extending Error class
  throw new Error(`"${paramName}" is required as an injected dependency.`);
}

module.exports = requiredDependency;