const makeUserDataLowerCase = require('./helpers/register/make-user-data-lower-case');

async function normaliseLoginObject(req, res, next) {
  const normalisers = [
    makeUserDataLowerCase,
  ];

  // Apply normaliser functions to the user object in order
  req.body = await normalisers.reduce((user, normaliserFunc) => {
    return normaliserFunc(user);
  }, req.body);

  next();
}

module.exports = normaliseLoginObject;