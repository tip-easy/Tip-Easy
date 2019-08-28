import * as types from '../actionTypes';

export const withdrawingStart = () => {
  return {
    type: types.WITHDRAWING_START,
  }
}

export const withdrawingSuccess = (message) => {
  return {
    type: types.WITHDRAWING_SUCCESS,
    payload: {
      successMessage: message
    }
  }
}

export const withdrawingFailure = (error) => {
  return { 
    type: types.WITHDRAWING_FAILURE, 
    payload: {
      error
    } 
  }
}

export const setAmount = (amount) => {
  return {
    type: types.SET_WITHDRAWAL_AMOUNT,
    payload: {
      withdrawalAmount: amount,
    }
  }
}

export const clearWithdrawal = () => {
  return {
    type: types.CLEAR_WITHDRAWAL_FROM_STORE,
  }
}

