function makeInterface({ interfaceFunction, ...dependencies } = {}, requiredParams = []) {
  requiredParams.forEach(param => {
    if (!dependencies[param]) {
      throw new Error(`makeInterface: "${param}" is a required dependency argument`);
    }
  });

  if (interfaceFunction && typeof interfaceFunction === 'function') {
    const interfaceFunctionWithInjectedDependencies = (interfaceParams) => 
      interfaceFunction({ ...dependencies }, { ...interfaceParams });
    return interfaceFunctionWithInjectedDependencies;
  } else {
    throw new Error('makeInterface: An interface function is required as a argument.');
  }
}

module.exports = makeInterface;