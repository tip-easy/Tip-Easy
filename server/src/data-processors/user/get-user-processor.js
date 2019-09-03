const requiredDependency = require('../../global-helpers/required-dependency');
const requiredParam = require('../../global-helpers/required-parameter');
const mockResponseData = require('../../database/mock-response-data') // Will remove once dbQuery helper complete

async function getUserProcessorFunction({
  extractTokenFromAuthHeader = requiredDependency('extractTokenFromAuthHeader'),
  verifyAuth = requiredDependency('verifyAuth'),
  dbQuery,
} = {},
  request = requiredParam('request')) {
  const { authorization: authHeader } = request.headers || {};
  const token = extractTokenFromAuthHeader(authHeader);
  const verifyAuthResponse = await verifyAuth(token);
  const tokenPayload = verifyAuthResponse.body;
  
  // Expected implementation
  // const userObj = await dbQuery(tokenPayload.sub);
  // return userObj;

  // Temporary mock response
  const userObj = await mockResponseData.getMeResponse();
  return userObj;
}


module.exports = getUserProcessorFunction;