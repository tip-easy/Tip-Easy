import * as types from './../Actions/actionTypes';

const initialState = {
  calculated_balance: 0,
  currency: "",
  wallet_type: "",

  gettingBalance: false,
  
  balanceMessage: "",
}

export const BalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETTING_BALANCE_START:
      return {
        ...state,
        balanceMessage: initialState.balanceMessage,

        gettingBalance: true,
      }
    
    case types.GETTING_BALANCE_SUCCESS:
      return {
        ...state,
        calculated_balance: action.payload.calculated_balance,
        currency: action.payload.currency,
        wallet_type: action.payload.wallet_type,

        gettingBalance: false,
      }

    case types.GETTING_BALANCE_FAILURE:
      return {
        ...state,
        balanceMessage: action.payload.error
      }

    case types.CLEAR_BALANCE_FROM_STORE:
      return {
        ...state,
        calculated_balance: initialState.calculated_balance,
        currency: initialState.currency,
        wallet_type: initialState.wallet_type,

        balanceMessage: initialState.balanceMessage,
      }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return initialState

    default: 
      return state
  }
}