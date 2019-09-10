import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/TipReceiverActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid'

export const searchForTipReceiver = (code, token) => dispatch => {
  dispatch(creators.searchingTipReceiverStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.SEARCHING_TIP_RECEIVER_FAILURE))
  }

  return axios.get(`${endpointURLs.searchTipReceiverPath}?s=${code}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.searchingTipReceiverSuccess(res.data))
    })

    .catch(error => {
      dispatch(creators.searchingTipReceiverFailure(error));
    })
}