import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import * as creators from './ActionCreators/TipReceiverActionCreators';

import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid'

export const searchForTipReceiver = (code, token) => dispatch => {
  dispatch(creators.searchingTipReceiverStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.SEARCHING_TIP_RECEIVER_FAILURE)
  }

  return axios.get(`${URL}/find-receiver?s=${code}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.searchingTipReceiverSuccess(res.data.receiverArray))
    })

    .catch(error => {
      dispatch(creators.searchingTipReceiverFailure(error));
    })
}

export const selectTipReceiver = (selectedTipReceiverCode) => dispatch => {
  dispatch(creators.setTipReceiverCode(selectedTipReceiverCode))
}

export const clearTipReceiverFromStore = () => dispatch => {
  dispatch(creators.clearTipReceiver())
}