import axios from 'axios';
import * as types from './actionTypes';
import * as creators from './ActionCreators/WithdrawActionCreators';
import { endpointURLs } from '../Utils/pathVariables';

import { tokenIsValid } from '../Utils/tokenUtils/tokenIsValid';
import { tokenIsNotValid } from '../Utils/tokenUtils/tokenIsNotValid';

export const makeWithdrawal = (withdraw_details, token) => dispatch => {
  dispatch(creators.withdrawingStart())

  let requestObject = {
    amount: withdraw_details.amount,
    currency: withdraw_details.currency,
    withdraw_method: withdraw_details.withdraw_method,
    withdraw_method_type: withdraw_details.withdraw_method_type,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.WITHDRAWING_FAILURE))
  }

  return axios.post(`${endpointURLs.withdrawalPath}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch(creators.withdrawingSuccess(res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.withdrawingFailure(error));
    })
}

export const setWithdrawalAmount = (amount) => dispatch => {
  return dispatch(creators.setAmount(amount))
}

export const clearWithdrawalFromStore = () => dispatch => {
  return dispatch(creators.clearWithdrawal())
}