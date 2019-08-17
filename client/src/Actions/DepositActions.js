import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid';

export const makeDeposit = (deposit_details, token) => dispatch => {
  dispatch({
    type: types.DEPOSITING_START,
  })

  const { amount, currency, deposit_method, deposit_method_type} = deposit_details;
  if (!amount || !currency || deposit_method || deposit_method_type) {
    return dispatch({ 
      type: types.DEPOSITING_FAILURE, 
      payload: {
        error: "Specify the amount, currency, deposit_method, and deposit_method_type"
      } 
    });
  }

  if (!tokenIsValid(token, )) {
    return dispatch({ 
      type: types.DEPOSITING_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.post(`${URL}/me/deposit`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, {amount, currency, deposit_method, deposit_method_type})
    .then(res => {
      dispatch({
        type: types.DEPOSITING_SUCCESS,
        payload: {
          successMessage: res.data.message
        }
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.DEPOSITING_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const setDepositAmount = (amount) => dispatch => {
  if (amount >= 10) {
    return dispatch({ 
      type: types.DEPOSITING_FAILURE, 
      payload: {
        error: "The minimum deposit amount is $10"
      } 
    });
  } else {
    return dispatch({
      type: types.SET_DEPOSIT_AMOUNT,
      payload: {
        depositAmount: amount,
      }
    })
  }
}

export const clearDepositFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_DEPOSIT_FROM_STORE,
  })
}