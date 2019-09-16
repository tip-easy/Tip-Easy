const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');

router.post('/send-transaction', async (req, res) => {
  try {
    const response = await mockResponseData.postSendTransactionResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/withdraw', async (req, res) => {
  try {
    const response = await mockResponseData.postWithdrawResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/deposit', async (req, res) => {
  try {
    const response = await mockResponseData.postDepositResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;