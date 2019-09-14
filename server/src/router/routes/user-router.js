const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');

router.get('/me', async (req, res) => {
  try {
    const response = await mockResponseData.getMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/me', async (req, res) => {
  try {
    const response = await mockResponseData.patchMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/me', async (req, res) => {
  try {
    const response = await mockResponseData.deleteMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/balance', async (req, res) => {
  try {
    const response = await mockResponseData.getBalanceResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/transactions', async (req, res) => {
  try {
    const response = await mockResponseData.getTransactionsResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/payment-methods', async (req, res) => {
  try {
    const response = await mockResponseData.getPaymentMethodsResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/payment-methods/:id', async (req, res) => {
  try {
    const response = await mockResponseData.getPaymentMethodByIdResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/me/payment-methods/:id', async (req, res) => {
  try {
    const response = await mockResponseData.deletePaymentMethodByIdResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/me/payment-methods', async (req, res) => {
  try {
    const response = await mockResponseData.postPaymentMethodResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/me/reset-password', async (req, res) => {
  try {
    const response = await mockResponseData.putResetPasswordResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
