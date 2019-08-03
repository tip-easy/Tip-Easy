import * as types from './../Actions/actionTypes';

const initialState = {
  withdrawalAmount: 0,

  withdrawing: false,
  
  withdrawalMessage: "",
}

export const WithdrawalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WITHDRAWAL_AMOUNT:
      return {
        ...state,
        withdrawalAmount: action.payload.withdrawalAmount,
      }
    
    case types.CLEAR_WITHDRAWAL_FROM_STORE:
      return {
        ...state,
        withdrawalAmount: initialState.withdrawalAmount,
      }

    case types.WITHDRAWING_START:
      return {
        ...state,
        withdrawing: true,

        withdrawalMessage: initialState.withdrawalMessage,
      }

    case types.WITHDRAWING_SUCCESS:
      return {
        ...state,
        withdrawing: false,

        withdrawalMessage: action.payload.successMessage,
      }

    case types.WITHDRAWING_FAILURE:
      return {
        ...state,
        withdrawing: false,

        withdrawalMessage: action.payload.error,
      }

    default: 
      return state
  }
}