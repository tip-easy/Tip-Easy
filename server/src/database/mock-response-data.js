module.exports = {
  // This is a temporary file mocking the response data that will be returned
  // from processors & the db
  postLoginResponse: () => Promise.resolve({
    message: `Welcome ${httpRequest.body.name}`,
    token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
  }),
  postRegisterResponse: () => Promise.resolve({
    message: "successfully registered"
  }),
  getMeResponse: () => Promise.resolve({
    account_type: "receiver",
    name: "Anthony",
    email: "anthony@company.com",
    profile_img: "",
    unique_code: "DSE2986",
    location: "Netherlands",
    organisation: "CoolStuff",
    default_currency: "eur"
  }),
  patchMeResponse: (requestData) => Promise.resolve({
    account_type: "receiver",
    name: "Anthony",
    email: "anthony@company.com",
    profile_img: "",
    unique_code: "DSE2986",
    location: "Netherlands",
    organisation: "CoolStuff",
    default_currency: "usd",
    ...requestData
  }),
  deleteMeResponse: () => Promise.resolve({
    message: "successfully deleted user"
  }),
  putResetPasswordResponse: () => Promise.resolve({
    message: "successfully updated password."
  }),
  getBalanceResponse: () => Promise.resolve([{
    calculated_balance: 14.43,
    currency: "usd",
    wallet_type: "sender"
  }, {
    calculated_balance: 56.24,
    currency: "usd",
    wallet_type: "receiver"
  }]),
  getTransactionsResponse: () => Promise.resolve([{
    transaction_id: "tx_3b241101-e2bb-4255-8caf-4136c566a962",
    amount: 3.5,
    currency: "usd",
    completed_at: 1565096311,
    transaction_type: "received",
    payment_method: {
      pay_method_id: null,
      pay_method_type: "card",
      brand: null
    },
    sender: {
      name: "Jeff",
      profile_img: "",
      location: "New York"
    }
  }, {
    transaction_id: "tx_de9db3c8-39da-41bb-a447-1b75b82f08fe",
    amount: 5,
    currency: "gbp",
    completed_at: 1557272901,
    transaction_type: "sent",
    payment_method: {
      pay_method_id: "pm_efb92526-fa82-4521-b995-82e64ea59193",
      pay_method_type: "card",
      brand: "visa"
    },
    sender: null
  }, {
    transaction_id: "tx_814d9033-cb38-4ed0-b7af-33a838c8fe50",
    amount: 86,
    currency: "usd",
    completed_at: 1559924227,
    transaction_type: "withdrawal",
    payment_method: {
      pay_method_id: "pm_5efb82e9-4ade-4800-9b33-3e18d597c28c",
      pay_method_type: "bank account",
      brand: null
    },
    sender: null
  }, {
    transaction_id: "tx_1003a423-76ab-4e2a-8618-e61ae6f7d79c",
    amount: 20,
    currency: "usd",
    completed_at: 1563790840,
    transaction_type: "deposit",
    payment_method: {
      pay_method_id: "pm_e3f62670-c087-4274-9194-1f7157a78926",
      pay_method_type: "card",
      brand: null
    },
    sender: null
  }]),
  getPaymentMethodsResponse: () => Promise.resolve([{
    pay_method_id: "pm_dee11d4e-63c6-4d90-983c-5c9f1e79e96c",
    pay_method_type: "card",
    created_at: 1565094311,
    last_used: 1565097311,
    brand: "visa",
    last_4_chars: "4242"
  }, {
    pay_method_id: "pm_5efb82e9-4ade-4800-9b33-3e18d597c28c",
    pay_method_type: "bank account",
    created_at: 1565094311,
    last_used: 1565097311,
    brand: null,
    last_4_chars: "5648"
  }, {
    pay_method_id: "pm_d2fdb741-6a6a-463e-8c3f-042c4be7ca97",
    pay_method_type: "btclightning",
    created_at: 1565094311,
    last_used: 1565097311,
    brand: null,
    last_4_chars: "ff4c"
  }]),
  postPaymentMethodResponse: () => Promise.resolve({
    message: "successfully added payment method"
  }),
  postDepositResponse: (requestData) => Promise.resolve({
    message: `Successfully deposited ${requestData.amount} into your wallet.`
  }),
  getFindReceiverResponse: () => Promise.resolve([{
    name: "Alison",
    profile_img: "",
    unique_code: "HMK3875",
    location: "New York",
    organisation: "Cool Company"
  }, {
    name: "Katia",
    profile_img: "",
    unique_code: "DLT9067",
    location: "Germany",
    organisation: "Cool Shop"
  }]),
  postSendTransactionResponse: (requestData) => Promise.resolve({
    message: `Payment to ${requestData.unique_code} successful.`
  })
}