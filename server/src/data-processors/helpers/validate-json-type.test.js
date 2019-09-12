const validateJSONType = require('./validate-json-type');

describe('Validate JSON Type Function', () => {
  it('should throw an error if no arguments are passed', () => {
    expect(() => validateJSONType()).toThrow(/parameter.+undefined/);
  });

  it('should throw an error if an argument of the wrong type is passed', () => {
    expect(() => validateJSONType([], null)).toThrow(/type object/);
    expect(() => validateJSONType('data', 543)).toThrow(/type object/);
  });

  it('should throw an error if the provided schema type !== data property type', () => {
    const obj = { 
      string_test: 'string value',
      number_test: 12345,
      array_test: [123, 'test'],
      null_test: null,
      object_test: { a: 1, b: 2 },
      boolean_test: false
    }

    const schema = {
      string_test: { type: 'string' },
      number_test: { type: 'string' },
      array_test: { type: 'string' },
      null_test: { type: 'string' },
      object_test: { type: 'string' },
      boolean_test: { type: 'string' }
    }
    expect(() => validateJSONType(obj, schema)).toThrow(/expected property.+type.+string/i);
  });

  it('should throw an error if an incorrect schema type is provided', () => {
    const obj = { 
      string_test: 'string value',
      number_test: 12345,
      array_test: [123, 'test'],
      null_test: null,
      object_test: { a: 1, b: 2 },
      boolean_test: false
    }

    const schema = {
      string_test: { type: 'string' },
      number_test: { type: 'number' },
      array_test: { type: 'array' },
      null_test: { type: 'incorrect' },
      object_test: { type: 'object' },
      boolean_test: { type: 'boolean' }
    }
    expect(() => validateJSONType(obj, schema)).toThrow(/invalid property type.+provided/i);
  });

  it('should return the initial object when all the provided schema types === data property types', () => {
    const obj = {
      string_test: 'string value',
      number_test: 12345,
      array_test: [123, 'test'],
      null_test: null,
      object_test: { a: 1, b: 2 },
      boolean_test: false
    }

    const schema = {
      string_test: { type: 'string' },
      number_test: { type: 'number' },
      array_test: { type: 'array' },
      null_test: { type: 'null' },
      object_test: { type: 'object' },
      boolean_test: { type: 'boolean' }
    }

    const returned = validateJSONType(obj, schema);

    expect(returned).toMatchObject(obj)
  });

  it('should return an immutable object when passed an immutable object', () => {
    const obj = Object.freeze({
      string_test: 'string value',
      number_test: 12345,
      array_test: [123, 'test'],
      null_test: null,
      object_test: { a: 1, b: 2 },
      boolean_test: false
    });

    const schema = {
      string_test: { type: 'string' },
      number_test: { type: 'number' },
      array_test: { type: 'array' },
      null_test: { type: 'null' },
      object_test: { type: 'object' },
      boolean_test: { type: 'boolean' }
    }

    const returned = validateJSONType(obj, schema);

    returned.string_test = 'altered';
    returned.object_test = 'altered';

    expect(returned.string_test).toBe('string value');
    expect(returned.object_test).toMatchObject({ a: 1, b: 2 });
  });
});

