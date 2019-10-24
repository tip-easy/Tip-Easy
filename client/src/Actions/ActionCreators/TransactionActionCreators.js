import * as types from '../actionTypes';

export const sendingTransactionStart = () => {
  return {
    type: types.SENDING_TRANSACTION_START,
  }
}

export const sendingTransactionSuccess = (message) => {
  return {
    type: types.SENDING_TRANSACTION_SUCCESS,
    payload: {
      successMessage: message
    }
  }
}

export const sendingTransactionFailure = (error) => {
  return { 
    type: types.SENDING_TRANSACTION_FAILURE, 
    payload: {
      error
    } 
  }
}

export const fetchingTransactionsStart = () => {
  return {
    type: types.FETCHING_TRANSACTIONS_START
  }
}

export const fetchingTransactionsSuccess = (transactionsArray) => {
  return { 
    type: types.FETCHING_TRANSACTIONS_SUCCESS,
    payload: {
      transactionsArray: transactionsArray
    }
  }
}

export const fetchingTransactionsFailure = (error) => {
  return { 
    type: types.FETCHING_TRANSACTIONS_FAILURE, 
    payload: {
      error
    } 
  }
}

export const clearTransactionList = () => {
  return {
    type: types.CLEAR_TRANSACTIONS_LIST_FROM_STORE,
  }
}