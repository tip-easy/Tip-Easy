const { getUserByField } = require('../../database/auth-queries');

async function addUserToRequestObject(req, res, next) {
  req.user = await getUserByField({ email: req.body.email }, { password: 0 });
  
  next();
}

module.exports = addUserToRequestObject;