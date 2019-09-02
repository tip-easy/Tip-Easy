import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import * as creators from './ActionCreators/DepositActionCreators';

import { tokenIsValid } from './../Helpers/tokenIsValid'
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid';

export const makeDeposit = (deposit_details, token) => dispatch => {
  dispatch(creators.makeDepositStart())

  const { amount, currency, deposit_method, deposit_method_type} = deposit_details;
  if (!amount || !currency || deposit_method || deposit_method_type) {
    return dispatch(creators.makeDepositFailureMissingParams());
  }

  if (!tokenIsValid(token, )) {
    return tokenIsNotValid(types.DEPOSITING_FAILURE)
  }

  return axios.post(`${URL}/me/deposit`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, {amount, currency, deposit_method, deposit_method_type})
    .then(res => {
      dispatch(creators.makeDepositSuccess(res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.makeDepositFailure(error));
    })
}

export const setDepositAmount = (amount) => dispatch => {
  if (amount >= 10 && amount <= 1000) {
    return dispatch(creators.makeDepositFailure("The minimum deposit amount is $10 and is limited to $1000"))
  } else {
    return dispatch(creators.setDepositAmountSuccess(amount))
  }
}

export const clearDepositFromStore = () => dispatch => {
  return dispatch(creators.clearDeposit())
}