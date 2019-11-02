const { getUserByField } = require('../../database/auth-queries');

async function userExists(field, filter) {
  
  const res = await getUserByField(field, filter);
  return res ? true : false;
}

module.exports = userExists;