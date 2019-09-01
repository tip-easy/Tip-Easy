import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import * as creators from './ActionCreators/PaymentMethodActionCreators';

import { tokenIsValid } from './../Helpers/tokenIsValid'
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid'

export const fetchPaymentMethods = (token) => dispatch => {
  dispatch(creators.fetchingPaymentMethodsStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.FETCHING_PAYMENT_METHODS_FAILURE)
  }

  return axios.get(`${URL}/me/payment-methods`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.fetchingPaymentMethodsSuccess(res.data.paymentMethodsArray))
    })

    .catch(error => {
      dispatch(creators.fetchingPaymentMethodsFailure(error));
    })
}

export const fetchIndividualPaymentMethod = (payment_method_id, token) => dispatch => {
  dispatch(creators.fetchingPaymentMethodsStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.FETCHING_PAYMENT_METHODS_FAILURE)
  }

  return axios.get(`${URL}/me/payment-methods/${payment_method_id}`, { 
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
export const addPaymentMethod = (new_payment_menthod, token) => dispatch => {
  dispatch(creators.addingPaymentMethodStart())

  let requestObject = {
    pay_method_type: new_payment_menthod.payment_method_id,
    brand: new_payment_menthod.brand,
    // What info do we need to provide?
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.ADDING_PAYMENT_METHOD_FAILURE)
  }

  return axios.post(`${URL}/me/payment-methods`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch(creators.addingPaymentMethodSuccess(res.data.paymentMethodsArray, res.data.message))
    })
    
    .catch(error => {
      dispatch(creators.addingPaymentMethodFailure(error));
    })
}

export const removePaymentMethod = (payment_method_id, id, token) => dispatch => {
  dispatch(creators.removingPaymentMethodStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.REMOVING_PAYMENT_METHOD_FAILURE)
  }

  return axios.delete(`${URL}/payment-methods/${payment_method_id}`, { 
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