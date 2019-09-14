const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');

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
    const response = await mockResponseData.postRegisterResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
