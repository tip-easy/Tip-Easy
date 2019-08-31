import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import * as creators from './ActionCreators/BalanceActionCreators';

import { tokenIsValid } from '../Utils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenIsNotValid'

export const getBalance = ( token ) => dispatch => {
  dispatch(creators.gettingBalanceStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.GETTING_BALANCE_FAILURE)
  }

  return axios.get(`${URL}/me/balance`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      const { estimated_balance, currency, wallet_type } = res.data
      dispatch(creators.gettingBalanceSuccess(estimated_balance, currency, wallet_type))
    })

    .catch(error => {
      dispatch(creators.gettingBalanceError(error));
    })
}

export const clearBalance = () => dispatch => {
  return dispatch(creators.clearBalance())
}