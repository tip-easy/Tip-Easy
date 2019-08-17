import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'

export const sendTransaction = (code, transactionObject, token) => dispatch => {
  dispatch({
    type: types.SENDING_TRANSACTION_START,
  })

  let requestObject = {
    amount: transactionObject.amount,
    currency: transactionObject.currency,
    unique_code: code,
    pay_method_string: transactionObject.pay_method_string,
    pay_method_type: transactionObject.pay_method_type,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.SENDING_TRANSACTION_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.post(`${URL}/send-transaction`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch({
        type: types.SENDING_TRANSACTION_SUCCESS,
        payload: {
          successMessage: res.data.message
        }
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.SENDING_TRANSACTION_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const fetchTransactions = (token) => dispatch => {
  dispatch({
    type: types.FETCHING_TRANSACTIONS_START
  })
  
  return axios.get(`${URL}/me/transactions`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.FETCHING_TRANSACTIONS_SUCCESS,
        payload: {
          transactionArray: res.data.transactionArray
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.FETCHING_TRANSACTIONS_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const clearTransactionList = () => dispatch => {
  return dispatch({
    type: types.CLEAR_TRANSACTIONS_LIST_FROM_STORE,
  })
}