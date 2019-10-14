function makeUserDataLowerCase(request) {
  const reqObj = { ...request };
  for (const prop in reqObj) {
    if (prop !== 'password' && typeof reqObj[prop] === 'string') {
      reqObj[prop] = reqObj[prop].toLowerCase();
    }
  }
  return reqObj;
}

module.exports = makeUserDataLowerCase;