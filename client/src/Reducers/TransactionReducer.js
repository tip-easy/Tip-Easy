import * as types from '../Actions/actionTypes';

const initialState = {
  
}

export const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // SENDING TRANSACTION
    case types.SENDING_TRANSACTION_START:
      return {
        ...state,

      }
    
    case types.SENDING_TRANSACTION_SUCCESS:
      return {
        ...state,

      }

    case types.SENDING_TRANSACTION_FAILURE:
      return {
        ...state,

      }

    case types.CLEAR_CURRENT_TRANSACTION_FROM_STORE:
      return {
        ...state,

      }

    // FETCHING TRANSACTIONS
    case types.FETCHING_TRANSACTIONS_START:
      return {
        ...state,
        
      }

    case types.FETCHING_TRANSACTIONS_SUCCESS:
      return {
        ...state,

      }

    case types.FETCHING_TRANSACTIONS_FAILURE:
      return {
        ...state,
        
      }

    case types.CLEAR_TRANSACTIONS_LIST_FROM_STORE:
      return {
        ...state,

      }

    default: 
      return state
  }
}