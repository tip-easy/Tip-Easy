import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/TransactionActionCreators';

import { pathObj } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid'

// TO-DO: Review Stripe API to figure out what endpoints to hit and what data to send in the request.
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
    return dispatch(tokenIsNotValid(types.SENDING_TRANSACTION_FAILURE))
  }

  return axios.post(`${pathObj.sendTransactionPath}`, {
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
  
  return axios.get(`${pathObj.getTransactionsPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.fetchingTransactionsSuccess(res.data))
    })

    .catch(error => {
      dispatch(creators.fetchingTransactionsFailure(error));
    })
}

export const clearTransactionList = () => dispatch => {
  return dispatch(creators.clearTransactionList())
}