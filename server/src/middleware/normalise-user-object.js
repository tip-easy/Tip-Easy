const hashPassword = require('./helpers/hash-password');
const makeUserDataLowerCase = require('./helpers/make-user-data-lower-case');
const enforceUserObjectSchema = require('./helpers/enforce-user-object-schema');
const addUniqueCodeToUser = require('./helpers/add-unique-code-to-user');

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