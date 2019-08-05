function makeInterface({ interfaceFunction, ...dependencies } = {}, requiredArgs = []) {
  requiredArgs.forEach(arg => {
    if (!dependencies[arg]) {
      throw new Error(`makeInterface: "${arg}" is a required dependency argument`);
    }
  });

  if (interfaceFunction && typeof interfaceFunction === 'function') {
    const interfaceFunctionWithInjectedDependencies = () => interfaceFunction(dependencies);
    return interfaceFunctionWithInjectedDependencies;
  } else {
    throw new Error('makeInterface: An interface function is required as a argument.');
  }
}

module.exports = makeInterface;