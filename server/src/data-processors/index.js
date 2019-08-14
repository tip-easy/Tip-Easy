// Third-party modules
const jwt = require('jsonwebtoken');

// Global Helpers
const makeInterface = require('../global-helpers/make-interface');
const mockResponseData = require('../database/mock-response-data');

// Local Helpers
const makeVerifyAuth = require('./helpers/verify-auth');
const verifyAuth = makeVerifyAuth({ jwt });

// Processor Functions
// TODO: Create processor functions for each endpoint


//====== Processors ======//
// To avoid the app.js from becoming a massive file, dependency injection
// happens here and then is exported.
// May refactor the other parts of the app to use a local index file for 
// dependency injection also depending on the benefits.
const getMeProcessor = makeInterface({
  interfaceFunction: getMeProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const patchMeProcessor = makeInterface({
  interfaceFunction: patchMeProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const deleteMeProcessor = makeInterface({
  interfaceFunction: deleteMeProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const putResetPasswordProcessor = makeInterface({
  interfaceFunction: putResetPasswordProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  // mockResponseData
});

const getBalanceProcessor = makeInterface({
  interfaceFunction: getBalanceProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const getTransactionsProcessor = makeInterface({
  interfaceFunction: getTransactionsProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const getPaymentMethodsProcessor = makeInterface({
  interfaceFunction: getPaymentMethodsProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const postPaymentMethodsProcessor = makeInterface({
  interfaceFunction: postPaymentMethodsProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const postDepositProcessor = makeInterface({
  interfaceFunction: postDepositProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const getFindReceiverProcessor = makeInterface({
  interfaceFunction: getFindReceiverProcessorFunction,
  // validate
  // normalise
  mockResponseData
});

const postSendTransactionProcessor = makeInterface({
  interfaceFunction: postSendTransactionProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const postLoginProcessor = makeInterface({
  interfaceFunction: postLoginProcessorFunction,
  // validate
  // normalise
  mockResponseData
});

const postRegisterProcessor = makeInterface({
  interfaceFunction: postRegisterProcessorFunction,
  // validate
  // normalise
  mockResponseData
});

module.exports = Object.freeze({
  getMeProcessor,
  patchMeProcessor,
  deleteMeProcessor,
  putResetPasswordProcessor,
  getBalanceProcessor,
  getTransactionsProcessor,
  getPaymentMethodsProcessor,
  postPaymentMethodsProcessor,
  postDepositProcessor,
  getFindReceiverProcessor,
  postSendTransactionProcessor,
  postLoginProcessor,
  postRegisterProcessor
});