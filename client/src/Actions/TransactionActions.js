import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import * as creators from './ActionCreators/TransactionActionCreators';

import { tokenIsValid } from './../Helpers/tokenIsValid'
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid'

export const sendTransaction = (code, transactionObject, token) => dispatch => {
  dispatch(creators.sendingTransactionStart())

  let requestObject = {
    amount: transactionObject.amount,
    currency: transactionObject.currency,
    unique_code: code,
    pay_method_string: transactionObject.pay_method_string,
    pay_method_type: transactionObject.pay_method_type,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.SENDING_TRANSACTION_FAILURE)
  }

  return axios.post(`${URL}/send-transaction`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch(creators.sendingTransactionSuccess(res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.sendingTransactionFailure(error));
    })
}

export const fetchTransactions = (token) => dispatch => {
  dispatch(creators.fetchingTransactionsStart())
  
  return axios.get(`${URL}/me/transactions`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.fetchingTransactionsSuccess(res.data.transactionArray))
    })

    .catch(error => {
      dispatch(creators.fetchingTransactionsFailure(error));
    })
}

export const clearTransactionList = () => dispatch => {
  return dispatch(creators.clearTransactionList())
}