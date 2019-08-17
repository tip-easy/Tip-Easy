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
const getUserProcessor = makeInterface({
  interfaceFunction: getUserProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const updateUserProcessor = makeInterface({
  interfaceFunction: updateUserProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const deleteUserProcessor = makeInterface({
  interfaceFunction: deleteUserProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const resetPasswordProcessor = makeInterface({
  interfaceFunction: resetPasswordProcessorFunction,
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

const addPaymentMethodProcessor = makeInterface({
  interfaceFunction: addPaymentMethodProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const depositProcessor = makeInterface({
  interfaceFunction: depositProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const findReceiverProcessor = makeInterface({
  interfaceFunction: findReceiverProcessorFunction,
  // validate
  // normalise
  mockResponseData
});

const sendTransactionProcessor = makeInterface({
  interfaceFunction: sendTransactionProcessorFunction,
  // verifyAuth
  // validate
  // normalise
  mockResponseData
});

const loginProcessor = makeInterface({
  interfaceFunction: loginProcessorFunction,
  // validate
  // normalise
  mockResponseData
});

const registerProcessor = makeInterface({
  interfaceFunction: registerProcessorFunction,
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