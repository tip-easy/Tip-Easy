import * as types from '../actionTypes';

export const gettingBalanceStart = () => {
  return { 
    type: types.GETTING_BALANCE_START 
  }
}

export const gettingBalanceSuccess = (estimated_balance, currency, wallet_type) => {
  return { 
    type: types.GETTING_BALANCE_SUCCESS,
    payload: {
      estimated_balance: estimated_balance,
      currency: currency,
      wallet_type: wallet_type,
    }
  }
}

export const gettingBalanceError = (error) => {
  return {
    type: types.GETTING_BALANCE_FAILURE, 
      payload: {
        error
      } 
  }
}

export const clearBalance = () => {
  return {
    type: types.CLEAR_BALANCE_FROM_STORE,
  }
}