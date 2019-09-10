import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/BalanceActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid'

export const getBalance = ( token ) => dispatch => {
  dispatch(creators.gettingBalanceStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.GETTING_BALANCE_FAILURE))
  }

  axios.get(`${endpointURLs.getBalancePath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      const { calculated_balance, currency, wallet_type } = res.data[0]
      
      return dispatch(creators.gettingBalanceSuccess(calculated_balance, currency, wallet_type))
    })

    .catch(error => {
      return dispatch(creators.gettingBalanceError(error));
    })
}

export const clearBalance = () => dispatch => {
  return dispatch(creators.clearBalance())
}