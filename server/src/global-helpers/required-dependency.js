function requiredDependency(paramName) {
  throw new Error(`"${paramName}" is required as an injected dependency.`);
}

module.exports = requiredDependency;