import * as types from './../Actions/actionTypes';

const initialState = {
  
}

export const WithdrawalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_WITHDRAWAL_AMOUNT:
      return {
        ...state,

      }
    
    case types.CLEAR_WITHDRAWAL_FROM_STORE:
      return {
        ...state,

      }

    case types.WITHDRAWING_START:
      return {
        ...state,

      }

    case types.WITHDRAWING_SUCCESS:
      return {
        ...state,

      }

    case types.WITHDRAWING_FAILURE:
      return {
        ...state,
        
      }

    default: 
      return state
  }
}