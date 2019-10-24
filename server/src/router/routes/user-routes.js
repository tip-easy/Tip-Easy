const router = require('express').Router();
const mockResponseData = require('../../database/mock-response-data');
const verifyAuth = require('../../middleware/auth/verify-auth');

router.get('/me', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.getMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.patch('/me', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.patchMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/me', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.deleteMeResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/balance', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.getBalanceResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/transactions', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.getTransactionsResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/payment-methods', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.getPaymentMethodsResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.get('/me/payment-methods/:id', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.getPaymentMethodByIdResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete('/me/payment-methods/:id', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.deletePaymentMethodByIdResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post('/me/payment-methods', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.postPaymentMethodResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put('/me/reset-password', verifyAuth, async (req, res) => {
  try {
    const response = await mockResponseData.putResetPasswordResponse();
    res.send(response);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
