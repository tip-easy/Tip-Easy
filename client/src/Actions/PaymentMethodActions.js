import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const FetchPaymentMethods = (token) => dispatch => {
  dispatch({
    type: types.FETCHING_PAYMENT_METHODS_START
  })
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

export const FetchIndividualPaymentMethod = (payment_method_id, token) => dispatch => {
  dispatch({
    type: types.FETCHING_PAYMENT_METHODS_START
  })
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
export const AddPaymentMethod = (new_payment_menthod, token) => dispatch => {
  let requestObject = {
    pay_method_type: new_payment_menthod.payment_method_id,
    brand: new_payment_menthod.brand,
    // What info do we need to provide?
  }

  dispatch({
    type: types.ADDING_PAYMENT_METHOD_START
  })

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

export const RemovePaymentMethod = (payment_method_id, id) => dispatch => {
  dispatch({
    type: types.REMOVING_PAYMENT_METHOD_START
  })

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

export const ClearPaymentMethodsFromStore = () => dispatch => {
  dispatch({
    type: types.CLEAR_PAYMENT_METHODS_FROM_STORE,
  })
}