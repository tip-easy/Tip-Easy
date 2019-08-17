import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'

export const MakeWithdrawal = (withdraw_details, token) => dispatch => {
  dispatch({
    type: types.WITHDRAWING_START,
  })

  let requestObject = {
    amount: withdraw_details.amount,
    currency: withdraw_details.currency,
    withdraw_method: withdraw_details.withdraw_method,
    withdraw_method_type: withdraw_details.withdraw_method_type,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.WITHDRAWING_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.post(`${URL}/api/me/withdraw`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch({
        type: types.WITHDRAWING_SUCCESS,
        payload: {
          successMessage: res.data.message
        }
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.WITHDRAWING_FAILURE, 
        payload: {error} 
      });
    })
}

export const SetWithdrawalAmount = (amount) => dispatch => {
  return dispatch({
    type: types.SET_WITHDRAWAL_AMOUNT,
    payload: {
      withdrawalAmount: amount,
    }
  })
}

export const ClearWithdrawalFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_WITHDRAWAL_FROM_STORE,
  })
}