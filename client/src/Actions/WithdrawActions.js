import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const MakeWithdrawal = (withdraw_details, token) => dispatch => {
  let requestObject = {
    amount: withdraw_details.amount,
    currency: withdraw_details.currency,
    withdraw_method: withdraw_details.withdraw_method,
    withdraw_method_type: withdraw_details.withdraw_method_type,
    // initiated_at: generateTimestamp()
  }

  dispatch({
    type: types.WITHDRAWING_START,
  })
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
      amount,
    }
  })
}

export const ClearWithdrawalFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_WITHDRAWAL_FROM_STORE,
  })
}