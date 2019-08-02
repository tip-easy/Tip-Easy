import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const MakeDeposit = (deposit_details, token) => dispatch => {
  let requestObject = {
    amount: deposit_details.amount,
    currency: deposit_details.currency,
    deposit_method: deposit_details.deposit_method,
    deposit_method_type: deposit_details.deposit_method_type,
    // initiated_at: generateTimestamp()
  }

  dispatch({
    type: types.DEPOSITING_START,
  })
  return axios.post(`${URL}/api/me/deposit`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
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
        payload: {error} 
      });
    })
}

export const SetDepositAmount = (amount) => dispatch => {
  return dispatch({
    type: types.SET_DEPOSIT_AMOUNT,
    payload: {
      amount,
    }
  })
}

export const ClearDepositFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_DEPOSIT_FROM_STORE,
  })
}