const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');

router.get('/find-receiver', async (req, res) => {
  try {
    const response = await mockResponseData.getFindReceiverResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
