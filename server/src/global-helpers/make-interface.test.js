const makeInterface = require('./make-interface');

describe('Make Interface Function', () => {
  it('should throw an error if not passed any arguments', () => {
    expect(() => makeInterface()).toThrow(/required.+argument/);
  });
  
  it('should throw an error if interfaceFunction argument is not a function', () => {
    expect(() => makeInterface({
      interfaceFunction: []
    })).toThrow(/interface.+required/);
    expect(() => makeInterface({
      interfaceFunction: {}
    })).toThrow(/interface.+required/);
  });
  
  xit('should throw an error if the specified required argument is not passed', () => {
    expect(() => makeInterface({
        interfaceFunction: () => {},
      },
      ['someDependency']
    )).toThrow(/someDependency.+required dependency/);
  });

  it('should return a function if interfaceFunction argument is a function', () => {
    expect(typeof makeInterface({
      interfaceFunction: () => {}
    })).toBe('function');
  });

  it('should return a function if the specified required argument is passed', () => {
    expect(typeof makeInterface({
      interfaceFunction: () => {},
      someDependency: () => {}
    },
      ['someDependency']
    )).toBe('function');
  });
});