const generateUniqueCode = require('./generate-unique-code');
const uniqueCodeExistsOnDB = require('./unique-code-exists');

async function addUniqueCodeToUser(user) {
  let code = generateUniqueCode();

  if (await uniqueCodeExistsOnDB(code)) {
    // Recursively call this function until generated code is unique
    return addUniqueCodeToUser(user);
  } else {
    return {
      ...user,
      unique_code: code
    };
  }
}

module.exports = addUniqueCodeToUser;
