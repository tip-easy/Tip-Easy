const requiredParam = require('../../global-helpers/required-parameter');
const getType = require('../../global-helpers/get-type');
const throwError = require('../../global-helpers/throw-error');

/**
 * @param  {object} data={}
 * @param  {object} schema={}
 */

 // TODO: Type checking nested object properties (deep check)
 // TODO: Type checking the elements inside of arrays

function validateJSONType(data = requiredParam(''), schema = requiredParam('')) {
  if (getType(data) !== 'object' || getType(schema) !== 'object') {
    throwError(`The data and schema parameters must be of type object`, 'application');
  }

  // Valid data types in JSON
  const types = /^(string|number|array|null|object|boolean)$/;
  
  // Checking for invalid property types in schema
  for (const prop in schema) {
    const providedSchemaType = schema[prop].type;
    
    if (providedSchemaType) {
      const schemaContainsValidType = !!providedSchemaType.match(types);
      
      if (!schemaContainsValidType) {
        throwError(`Invalid property type "${providedSchemaType}" provided for property "${prop}"`, 'validation');
      }
    }
  }

  // Validate data property types based on schema
  for (const prop in data) {
    const propType = getType(data[prop]);
    const expectedPropType = schema[prop].type;
    
    if (prop in schema && expectedPropType) {
      if (propType !== expectedPropType) {
        throwError(`Expected property "${prop}" to be of type "${expectedPropType}" got "${data}" instead`, 'validation');
      }
    }
  }

  return data;
}

module.exports = validateJSONType;