import * as types from '../Actions/actionTypes';

const initialState = {
  transaction: {},
  transactionsArray: [],

  sendingTransaction: false,
  fetchingTransactionsArray: false,
  
  sendTransactionMessage: "",
  fetchTransactionsArrayMessage: ""
}

export const TransactionReducer = (state = initialState, action) => {
  switch (action.type) {
    // SENDING TRANSACTION
    case types.SENDING_TRANSACTION_START:
      return {
        ...state,
        sendingTransaction: true,

        sendTransactionMessage: initialState.sendTransactionMessage,
      }
    
    case types.SENDING_TRANSACTION_SUCCESS:
      return {
        ...state,
        sendingTransaction: false,

        sendTransactionMessage: action.payload.successMessage,
      }

    case types.SENDING_TRANSACTION_FAILURE:
      return {
        ...state,
        sendingTransaction: false,

        sendTransactionMessage: action.payload.error,
      }

    // case types.CLEAR_CURRENT_TRANSACTION_FROM_STORE:
    //   return {
    //     ...state,

    //   }

    // FETCHING TRANSACTIONS
    case types.FETCHING_TRANSACTIONS_START:
      return {
        ...state,
        fetchingTransactionsArray: true,

        fetchTransactionsArrayMessage: initialState.fetchTransactionsArrayMessage,
      }

    case types.FETCHING_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        fetchingTransactionsArray: false,

        transactionsArray: action.payload.transactionsArray
      }

    case types.FETCHING_TRANSACTIONS_FAILURE:
      return {
        ...state,
        fetchingTransactionsArray: false,

        fetchTransactionsArrayMessage: action.payload.error,
      }

    case types.CLEAR_TRANSACTIONS_LIST_FROM_STORE:
      return {
        ...state,
        transactionsArray: initialState.transactionsArray,
      }

    default: 
      return state
  }
}