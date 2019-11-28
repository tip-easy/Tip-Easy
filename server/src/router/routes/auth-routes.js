const router = require('express').Router();
const validateLoginRoute = require('../../middleware/auth/validate-login-route');
const validateRegisterRoute = require('../../middleware/auth/validate-register-route');
const normaliseUser = require('../../middleware/auth/normalise-user-object');
const normaliseLoginObject = require('../../middleware/auth/normalise-login-object');
const addUserToRequestObject = require('../../middleware/auth/add-user-to-request-object');
const generateToken = require('../../data-processors/helpers/generate-token');
const { createUser } = require('../../database/auth-queries.js');
const extractTokenFromAuthHeader = require('../../middleware/auth/helpers/extract-token');
const verifyToken = require('../../middleware/auth/helpers/verify-token');

router.post(
  '/login',
  normaliseLoginObject,
  validateLoginRoute,
  addUserToRequestObject,
  async (req, res) => {    
    try {
      const generatedToken = generateToken({ userId: req.user._id.toString() });
      res
        .cookie('token', generatedToken, {
          maxAge: process.env.TOKEN_EXPIRY_TIME,
          httpOnly: true 
        })
        .send({ token: generatedToken });
    } catch (err) {
      console.log(err);
      res.status(500).send(err);
    }
  }
);

router.post('/register', validateRegisterRoute, normaliseUser, async (req, res) => {
  try {
    await createUser(req.normalisedUser);
    return res.send({ message: "successfully registered"});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get('/verify', (req, res) => {
  let token;

  try {
    token = extractTokenFromAuthHeader(req.headers.authorization);
  } catch (err) {
    console.log(err.message);
    return res.send({ isAuthenticated: false });
  }
  try {
    verifyToken(token);
    return res.send({ isAuthenticated: true });
  } catch (err) {
    console.log(err.message);
    return res.send({ isAuthenticated: false });
  }
});

module.exports = router;
