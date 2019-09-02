// Third-party modules
const jwt = require('jsonwebtoken');

// Global Helpers
const makeInterface = require('../global-helpers/make-interface');
const mockResponseData = require('../database/mock-response-data');

// Local Helpers
const extractTokenFromAuthHeader = require('./helpers/extract-token');
const makeVerifyAuth = require('./helpers/verify-auth');
const makeGenerateToken = require('./helpers/generate-token');
const verifyAuth = makeVerifyAuth({ jwt });
const generateToken = makeGenerateToken({ jwt });

// Processor Functions
const getUserProcessorFunction = require('./user/get-user-processor');
const updateUserProcessorFunction = async () => {};
const deleteUserProcessorFunction = async () => {};
const resetPasswordProcessorFunction = async () => {};
const getBalanceProcessorFunction = async () => {};
const getTransactionsProcessorFunction = async () => {};
const getPaymentMethodsProcessorFunction = async () => {};
const addPaymentMethodProcessorFunction = async () => {};
const depositProcessorFunction = async () => {};
const findReceiverProcessorFunction = async () => {};
const sendTransactionProcessorFunction = async () => {};
const loginProcessorFunction = require('./auth/login-processor');
const registerProcessorFunction = require('./auth/register-processor');


//====== Processors ======//
// To avoid the app.js from becoming a massive file, dependency injection
// happens here and then is exported.
// May refactor the other parts of the app to use a local index file for 
// dependency injection also depending on the benefits.
const getUserProcessor = makeInterface({
  interfaceFunction: getUserProcessorFunction,
  extractTokenFromAuthHeader,
  verifyAuth
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
  generateToken,
  validate: (obj) => obj,
  normalise: (obj) => obj
});

const registerProcessor = makeInterface({
  interfaceFunction: registerProcessorFunction,
  validate: (obj) => obj,
  normalise: (obj) => obj
});

module.exports = Object.freeze({
  getUserProcessor,
  updateUserProcessor,
  deleteUserProcessor,
  resetPasswordProcessor,
  getBalanceProcessor,
  getTransactionsProcessor,
  getPaymentMethodsProcessor,
  addPaymentMethodProcessor,
  depositProcessor,
  findReceiverProcessor,
  sendTransactionProcessor,
  loginProcessor,
  registerProcessor
});