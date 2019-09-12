import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/DepositActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid';

export const makeDeposit = (deposit_details, token) => dispatch => {
  dispatch(creators.makeDepositStart())

  const { amount, currency, deposit_method_id, deposit_method_type} = deposit_details;
  if (!amount || !currency || !deposit_method_id || !deposit_method_type) {
    return dispatch(creators.makeDepositFailureMissingParams());
  }

  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.DEPOSITING_FAILURE)
  }

  return axios.post(`${endpointURLs.depositPath}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, {amount, currency, deposit_method_id, deposit_method_type})
    .then(res => {
      dispatch(creators.makeDepositSuccess(res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.makeDepositFailure(error));
    })
}

export const setDepositAmount = (amount) => dispatch => {
  if (amount < 10 ) {
    return dispatch(creators.makeDepositFailure("The minimum deposit amount is $10"))
  } else if (amount > 1000) {
    return dispatch(creators.makeDepositFailure("The maximum deposit amount is $1000"))
  } else {
    return dispatch(creators.setDepositAmountSuccess(amount))
  }
}

export const clearDepositFromStore = () => dispatch => {
  return dispatch(creators.clearDeposit())
}