import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const GetBalance = ( token ) => dispatch => {
  dispatch({
    type: types.GETTING_BALANCE_START
  })

  return axios.get(`${URL}/api/me/balance`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.GETTING_BALANCE_SUCCESS,
        payload: {
          estimated_balance: res.data.estimated_balance,
          currency: res.data.currency,
          wallet_type: res.data.wallet_type,
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.GETTING_BALANCE_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const ClearBalance = () => dispatch => {
  return dispatch({
    type: types.CLEAR_BALANCE_FROM_STORE,
  })
}