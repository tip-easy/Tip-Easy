const requiredDependency = require('../../global-helpers/required-dependency');
const requiredParam = require('../../global-helpers/required-parameter');
const mockResponseData = require('../../database/mock-response-data') // Will remove once dbQuery helper complete

async function loginProcessorFunction({
  validate = requiredDependency('validate'),
  normalise = requiredDependency('normalise'),
  generateToken = requiredDependency('generateToken'), 
  // dbQuery = requiredDependency('dbQuery'),
} = {}, 
request = requiredParam('request')) {
  
  // Expected implementation
  // await validate(request.body, { email: { type: 'string' }, password: { type: 'string' }});
  // const normalisedRequestBody = await normalise(request.body);
  // const { id: userId } = await checkCredentials(normalisedRequestBody);
  // const token = generateToken({ userId });
  // const message = <success message>

  const token = generateToken({ userId: '0f9d1d53-03ca-4817-8a32-43e25fbfc255' });
  const { message } = await mockResponseData.postLoginResponse(request);

  return {
    message,
    token
  };
}

module.exports = loginProcessorFunction;