import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'

export const fetchPaymentMethods = (token) => dispatch => {
  dispatch({
    type: types.FETCHING_PAYMENT_METHODS_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.FETCHING_PAYMENT_METHODS_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.get(`${URL}/api/me/payment-methods`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.FETCHING_PAYMENT_METHODS_SUCCESS,
        payload: {
          paymentMethodsArray: res.data.paymentMethodsArray
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.FETCHING_PAYMENT_METHODS_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const fetchIndividualPaymentMethod = (payment_method_id, token) => dispatch => {
  dispatch({
    type: types.FETCHING_PAYMENT_METHODS_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.FETCHING_PAYMENT_METHODS_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.get(`${URL}/api/me/payment-methods/${payment_method_id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.FETCHING_PAYMENT_METHODS_SUCCESS,
        payload: {
          individualPaymentMethod: res.data.payment_method,
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.FETCHING_PAYMENT_METHODS_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

// Do we need this action, or will it be handled solely through Stripe?
export const addPaymentMethod = (new_payment_menthod, token) => dispatch => {
  let requestObject = {
    pay_method_type: new_payment_menthod.payment_method_id,
    brand: new_payment_menthod.brand,
    // What info do we need to provide?
  }

  dispatch({
    type: types.ADDING_PAYMENT_METHOD_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.ADDING_PAYMENT_METHOD_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.post(`${URL}/api/me/payment-methods`, {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch({
        type: types.ADDING_PAYMENT_METHOD_SUCCESS,
        payload: {
          paymentMethodsArray: res.data.paymentMethodsArray,
          successMessage: res.data.message
        }
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.ADDING_PAYMENT_METHOD_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const removePaymentMethod = (payment_method_id, id, token) => dispatch => {
  dispatch({
    type: types.REMOVING_PAYMENT_METHOD_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.REMOVING_PAYMENT_METHOD_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  return axios.delete(`${URL}/api/payment-methods/${payment_method_id}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    })
    .then(res => {
      dispatch({
        type: types.REMOVING_PAYMENT_METHOD_SUCCESS
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.REMOVING_PAYMENT_METHOD_FAILURE,
        payload: {
          error
        } 
      })
    })
}

export const clearPaymentMethodsFromStore = () => dispatch => {
  dispatch({
    type: types.CLEAR_PAYMENT_METHODS_FROM_STORE,
  })
}