import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

export const searchForTipReceiver = (code, token) => dispatch => {
  dispatch({
    type: types.SEARCHING_TIP_RECEIVER_START
  })

  return axios.get(`${URL}/api/find-receiver?s=${code}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.SEARCHING_TIP_RECEIVER_SUCCESS,
        payload: {
          receiverSearchResultArray: res.data.receiverArray
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.SEARCHING_TIP_RECEIVER_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const selectTipReceiver = (code) => dispatch => {
  dispatch({
    type: types.SET_TIP_RECEIVER_CODE,
    payload: {
      selectedTipReceiverCode: code
    }
  })
}

export const clearTipReceiver = () => dispatch => {
  dispatch({
    type: types.CLEAR_TIP_RECEIVER_CODE_FROM_STORE,
  })
}