const requiredDependency = require('../../global-helpers/required-dependency');
const requiredParam = require('../../global-helpers/required-parameter');
const mockResponseData = require('../../database/mock-response-data') // Will remove once dbQuery helper complete

async function registerProcessorFunction({
  validate = requiredDependency('validate'),
  normalise = requiredDependency('normalise'),
  // dbQuery = requiredDependency('dbQuery'),
} = {},
  request = requiredParam('request')) {

  // Expected implementation
  // await validate(request.body, { email: { type: 'string' }, password: { type: 'string' }});
  // const normalisedRequestBody = await normalise(request.body);
  // await createUser(normalisedRequestBody);
  // const message = <success message>
  
  const message = await mockResponseData.postRegisterResponse();

  return message;
}

module.exports = registerProcessorFunction;