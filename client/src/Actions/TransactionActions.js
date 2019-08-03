import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const SendTransaction = (code, transactionObject, token) => dispatch => {
  let requestObject = {
    amount: transactionObject.amount,
    currency: transactionObject.currency,
    unique_code: code,
    pay_method_string: transactionObject.pay_method_string,
    pay_method_type: transactionObject.pay_method_type,
  }

  dispatch({
    type: types.SENDING_TRANSACTION_START,
  })
  return axios.post(`${URL}/api/send-transaction`, {
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

// Not sure whether or not we need to implement this
// export const ClearCurrentTransaction = () => dispatch => {
//   return dispatch({
//     type: types.CLEAR_CURRENT_TRANSACTION_FROM_STORE,
//   })
// }

export const FetchTransactions = (token) => dispatch => {
  dispatch({
    type: types.FETCHING_TRANSACTIONS_START
  })
  
  return axios.get(`${URL}/api/me/transactions`, { 
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

export const ClearTransactionList = () => dispatch => {
  return dispatch({
    type: types.CLEAR_TRANSACTIONS_LIST_FROM_STORE,
  })
}