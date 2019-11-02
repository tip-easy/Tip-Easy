const bcrypt = require('bcryptjs');

function hashPassword(user) {
  return {
    ...user,
    password: bcrypt.hashSync(user.password, 12)
  };
}

module.exports = hashPassword;
