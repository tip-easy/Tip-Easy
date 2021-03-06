import * as types from '../Actions/actionTypes';

const initialState = {
  depositAmount: 0,

  depositing: false,
  
  depositMessage: "",
}

export const DepositReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DEPOSIT_AMOUNT:
      return {
        ...state,
        depositAmount: action.payload.depositAmount,

        depositMessage: initialState.depositMessage,
      }
    
    case types.CLEAR_DEPOSIT_FROM_STORE:
      return {
        ...state,
        depositMessage: initialState.depositMessage,

        depositAmount: initialState.depositAmount,
      }

    case types.DEPOSITING_START:
        return {
          ...state,
          depositing: true,

          depositMessage: initialState.depositMessage,
        }

    case types.DEPOSITING_SUCCESS:
        return {
          ...state,
          depositMessage: action.payload.successMessage,

          depositing: false,

        }

    case types.DEPOSITING_FAILURE:
        return {
          ...state,
          depositing: false,

          depositMessage: action.payload.error,
        }

    case types.DEPOSITING_FAILURE_INVALID_PARAMS:
        return {
          ...state,
          depositing: false,

          depositMessage: action.payload.error,
        }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
        return {
          ...initialState
        }

    default: 
      return state
  }
}