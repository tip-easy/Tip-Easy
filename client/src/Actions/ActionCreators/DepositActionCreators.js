import * as types from '../actionTypes';

export const makeDepositStart = () => {
  return {
    type: types.DEPOSITING_START,
  }
}

export const makeDepositFailureMissingParams = () => {
  return { 
    type: types.DEPOSITING_FAILURE, 
    payload: {
      error: "Specify the amount, currency, deposit_method, and deposit_method_type"
    } 
  }
}

export const makeDepositSuccess = (message) => {
  console.log(message)
  return {
    type: types.DEPOSITING_SUCCESS,
    payload: {
      successMessage: message
    }
  }
}

export const makeDepositFailure = (error) => {
  return { 
    type: types.DEPOSITING_FAILURE, 
    payload: {
      error
    } 
  }
}

export const setDepositAmountSuccess = (amount) => {
  return {
    type: types.SET_DEPOSIT_AMOUNT,
    payload: {
      depositAmount: amount,
    }
  }
}

export const clearDeposit = () => {
  return {
    type: types.CLEAR_DEPOSIT_FROM_STORE,
  }
}