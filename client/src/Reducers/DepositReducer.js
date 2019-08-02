import * as types from '../Actions/actionTypes';

const initialState = {
  
}

export const DepositReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEPOSIT_AMOUNT:
      return {
        ...state,

      }
    
    case types.CLEAR_DEPOSIT_FROM_STORE:
      return {
        ...state,

      }

    case types.DEPOSITING_START:
        return {
          ...state,

        }

    case types.DEPOSITING_SUCCESS:
        return {
          ...state,

        }

    case types.DEPOSITING_FAILURE:
        return {
          ...state,
          
        }

    default: 
      return state
  }
}