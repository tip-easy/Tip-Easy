import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid'

export const searchForTipReceiver = (code, token) => dispatch => {
  dispatch({
    type: types.SEARCHING_TIP_RECEIVER_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.SEARCHING_TIP_RECEIVER_FAILURE)
  }

  return axios.get(`${URL}/find-receiver?s=${code}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer${token}`,
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

export const selectTipReceiver = (selectedTipReceiverCode) => dispatch => {
  dispatch({
    type: types.SET_SELECTED_TIP_RECEIVER_CODE,
    payload: {
      selectedTipReceiverCode: selectedTipReceiverCode
    }
  })
}

export const clearTipReceiver = () => dispatch => {
  dispatch({
    type: types.CLEAR_SELECTED_TIP_RECEIVER_CODE_FROM_STORE,
  })
}