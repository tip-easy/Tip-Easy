const objectContainsProperties = require('../../global-helpers/object-contains-properties');
const isValidEmail = require('../helpers/is-valid-email');
const userExists = require('../helpers/user-exists');
const credentialsMatch = require('./helpers/login/credentials-match');

async function validateLoginRoute(req, res, next) {
  if (!objectContainsProperties(req.body, ['email', 'password'])) {
    return res.status(400).send({
      message: 'A login object containing the required properties is required.'
    });
  } else if (!isValidEmail(req.body.email)) {
    return res.status(400).send({
      message: 'A valid email is required.'
    });
  } else if (
    !(await userExists({ email: req.body.email }, { _id: 1 }))
  ) {
    return res.status(400).send({
      message: 'Incorrect credentials. Please try again.'
    });
  } else if (!(await credentialsMatch(req.body))) {
    return res.status(400).send({
      message: 'Incorrect credentials. Please try again.'
    });
  }

  next();
}

module.exports = validateLoginRoute;
