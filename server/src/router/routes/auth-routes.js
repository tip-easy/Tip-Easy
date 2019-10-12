const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');
const { createUser } = require('../../database/auth-queries.js');

router.post('/login', async (req, res) => {
  try {
    const response = await mockResponseData.postLoginResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/register', async (req, res) => {
  try {
    await createUser(req.body);
    res.send({ message: "successfully registered"});
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

module.exports = router;
