const requestContainsUserProperties = require('./helpers/request-contains-user-properties');
const isValidEmail = require('./helpers/is-valid-email');
const userAccountTypeIsValid = require('./helpers/user-account-type-is-valid');
const userEmailExists = require('./helpers/user-email-exists');

async function validateRegisterUser(req, res, next) {
  if (!requestContainsUserProperties(req.body)) {
    return res.status(400).send({
      message: 'A user object containing the required properties is required'
    });
  } else if (!isValidEmail(req.body.email)) {
    return res.status(400).send({ 
      message: 'A valid email is required' 
    });
  } else if (await userEmailExists(req.body.email)) {
    return res.status(400).send({ 
      message: 'A user with this email already exists.' 
    });
  } else if (req.body.password.length < 6) {
    return res.status(400).send({ 
      message: 'password must be at least 6 characters long' 
    });
  } else if (!userAccountTypeIsValid(req.body.account_type)) {
    return res.status(400).send({ 
      message: 'account_type must be "sender" or "receiver"' 
    });
  }

  next();
}

module.exports = validateRegisterUser;
