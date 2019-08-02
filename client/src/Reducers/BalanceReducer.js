import * as types from './../Actions/actionTypes';

const initialState = {
  
}

export const BalanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETTING_BALANCE_START:
      return {
        ...state,

      }
    
    case types.GETTING_BALANCE_SUCCESS:
      return {
        ...state,

      }

    case types.GETTING_BALANCE_FAILURE:
        return {
          ...state,

        }

    case types.CLEAR_BALANCE_FROM_STORE:
        return {
          ...state,

        }

    default: 
      return state
  }
}