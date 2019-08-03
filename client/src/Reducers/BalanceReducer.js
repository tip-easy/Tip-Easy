import * as types from './../Actions/actionTypes';

const initialState = {
  balance: 0,
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
        balance: action.payload.balance,
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
          balance: initialState.balance,
          balanceMessage: initialState.balanceMessage,
        }

    default: 
      return state
  }
}