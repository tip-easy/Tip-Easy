export const URL = process.env.API_URL || "http://localhost:7000"

// Path contains the 'base' of the URL but does not includes params
// These will have to be included separately in the Axios request
export const pathObj = {
  // Authentication
  loginPath: `${URL}/login`,
  registrationPath: `${URL}/register`,

  // Users
  getUserPath: `${URL}/me`,
  patchUserPath: `${URL}/me`,
  deleteUserPath: `${URL}/me`,
  changePasswordPath: `${URL}/me`,

  // Balance
  getBalancePath: `${URL}/me/balance`,

  // Transactions
  getTransactionsPath: `${URL}/me/transactions`,

  // Deposit
  sendDepositPath: `${URL}/me/payment-methods`,

  // Payment Methods
  getPaymentMethodsPath: `${URL}/me/payment-methods`,
  addPaymentMethodPath: `${URL}/me/payment-methods`,

  // Tip Receivers
  searchTipReceiverPath: `${URL}/find-receiver`,

  // Send Transaction
  sendTransactionPath: `${URL}/sendTransaction`,
};