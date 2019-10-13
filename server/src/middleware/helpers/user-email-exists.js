const { getUserByEmail } = require('../../database/auth-queries');

async function userEmailExists(email) {
  const res = await getUserByEmail(email);
  return res ? true : false;
}

module.exports = userEmailExists;