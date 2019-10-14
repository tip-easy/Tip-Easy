const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');
const validateLoginRoute = require('../../middleware/auth/validate-login-route');
const validateRegisterRoute = require('../../middleware/auth/validate-register-route');
const normaliseUser = require('../../middleware/auth/normalise-user-object');
const normaliseLoginObject = require('../../middleware/auth/normalise-login-object');
const { createUser } = require('../../database/auth-queries.js');

router.post('/login', normaliseLoginObject, validateLoginRoute, async (req, res) => {
  try {
    // TODO:
    // Generate token
    // Respond with token
    // Send token as cookie
    const response = await mockResponseData.postLoginResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/register', validateRegisterRoute, normaliseUser, async (req, res) => {
  try {
    await createUser(req.normalisedUser);
    return res.send({ message: "successfully registered"});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
