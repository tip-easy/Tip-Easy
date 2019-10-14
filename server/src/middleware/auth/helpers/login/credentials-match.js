const { getUserByField } = require('../../../../database/auth-queries');
const bcrypt = require('bcryptjs');

async function checkCredentials(credentials) {
  const user = await getUserByField({ email: credentials.email }, { email: 1, password: 1 });
  
  return bcrypt.compareSync(credentials.password, user.password);
}

module.exports = checkCredentials;