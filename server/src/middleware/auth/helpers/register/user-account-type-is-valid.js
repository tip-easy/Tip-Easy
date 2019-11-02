function userAccountTypeIsValid(accountType) {
  return accountType.match(/sender|receiver/i);
}

module.exports = userAccountTypeIsValid;
