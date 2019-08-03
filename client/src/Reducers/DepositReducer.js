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
      }
    
    case types.CLEAR_DEPOSIT_FROM_STORE:
      return {
        ...state,
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
          depositing: false,
        }

    case types.DEPOSITING_FAILURE:
        return {
          ...state,
          depositing: false,
          depositMessage: action.payload.error,
        }

    default: 
      return state
  }
}