function requestContainsUserProperties(request) {
  return (
    'account_type' in request &&
    'name' in request &&
    'email' in request &&
    'password' in request
  );
}

module.exports = requestContainsUserProperties;
