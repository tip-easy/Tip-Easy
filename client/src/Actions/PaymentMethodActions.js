import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/PaymentMethodActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenUtils/tokenIsValid'
import { tokenIsNotValid } from '../Utils/tokenUtils/tokenIsNotValid'

export const fetchPaymentMethods = (token) => dispatch => {
  dispatch(creators.fetchingPaymentMethodsStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.FETCHING_PAYMENT_METHODS_FAILURE))
  }

  return axios.get(`${endpointURLs.getPaymentMethodsPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.fetchingPaymentMethodsSuccess(res.data))
    })

    .catch(error => {
      dispatch(creators.fetchingPaymentMethodsFailure(error));
    })
}

export const fetchIndividualPaymentMethod = (payment_method_id, token) => dispatch => {
  dispatch(creators.fetchingPaymentMethodsStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.FETCHING_PAYMENT_METHODS_FAILURE))
  }

  return axios.get(`${endpointURLs.getPaymentMethodsPath}/${payment_method_id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.fetchingIndividualPaymentMethodSuccess(res.data.payment_method))
    })

    .catch(error => {
      dispatch(creators.fetchingPaymentMethodsFailure(error));
    })
}

// Do we need this action, or will it be handled solely through Stripe?
export const addPaymentMethod = (new_payment_method, token) => dispatch => {
  dispatch(creators.addingPaymentMethodStart())

  let requestObject = {
    pay_method_type: new_payment_method.payment_method_id,
    brand: new_payment_method.brand,
    // What info do we need to provide?
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.ADDING_PAYMENT_METHOD_FAILURE))
  }

  return axios.post(`${endpointURLs.addPaymentMethodPath}`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch(creators.addingPaymentMethodSuccess(res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.addingPaymentMethodFailure(error));
    })
}

export const removePaymentMethod = (payment_method_id, token) => dispatch => {
  dispatch(creators.removingPaymentMethodStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.REMOVING_PAYMENT_METHOD_FAILURE))
  }

  return axios.delete(`${endpointURLs.deletePaymentMethodPath}/${payment_method_id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      dispatch(creators.removingPaymentMethodSuccess())
    })
    
    .catch(error => {
      dispatch(creators.removingPaymentMethodFailure(error))
    })
}

export const clearPaymentMethodsFromStore = () => dispatch => {
  dispatch(creators.clearPaymentMethods())
}