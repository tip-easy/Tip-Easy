const hashPassword = require('./helpers/register/hash-password');
const makeUserDataLowerCase = require('./helpers/register/make-user-data-lower-case');
const enforceUserObjectSchema = require('./helpers/register/enforce-user-object-schema');
const addUniqueCodeToUser = require('./helpers/register/add-unique-code-to-user');

async function normaliseUserObject(req, res, next) {
  const normalisers = [
    hashPassword,
    makeUserDataLowerCase,
    enforceUserObjectSchema,
    addUniqueCodeToUser
  ];

  // Apply normaliser functions to the user object in order
  req.normalisedUser = await normalisers.reduce((user, normaliserFunc) => {
    return normaliserFunc(user);
  }, req.body);

  next();
}

module.exports = normaliseUserObject;