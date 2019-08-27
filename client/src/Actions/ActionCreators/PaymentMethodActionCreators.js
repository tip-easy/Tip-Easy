import * as types from '../actionTypes';

export const fetchingPaymentMethodsStart = () => {
  return {
    type: types.FETCHING_PAYMENT_METHODS_START
  }
}

export const fetchingPaymentMethodsSuccess = (paymentMethodsArray) => {
  return { 
    type: types.FETCHING_PAYMENT_METHODS_SUCCESS,
    payload: {
      paymentMethodsArray: paymentMethodsArray
    }
  }
}

export const fetchingPaymentMethodsFailure = (error) => {
  return { 
    type: types.FETCHING_PAYMENT_METHODS_FAILURE, 
    payload: {
      error
    } 
  }
}

export const fetchingIndividualPaymentMethodSuccess = (payment_method) => {
  return { 
    type: types.FETCHING_PAYMENT_METHODS_SUCCESS,
    payload: {
      individualPaymentMethod: payment_method,
    }
  }
}

export const addingPaymentMethodStart = () => {
  return {
    type: types.ADDING_PAYMENT_METHOD_START
  }
}

export const addingPaymentMethodSuccess = (paymentMethodsArray, message) => {
  return {
    type: types.ADDING_PAYMENT_METHOD_SUCCESS,
    payload: {
      paymentMethodsArray: paymentMethodsArray,
      successMessage: message
    }
  }
}

export const addingPaymentMethodFailure = (error) => {
  return { 
    type: types.ADDING_PAYMENT_METHOD_FAILURE, 
    payload: {
      error
    } 
  }
}

export const removingPaymentMethodStart = () => {
  return {
    type: types.REMOVING_PAYMENT_METHOD_START
  }
}

export const removingPaymentMethodSuccess = () => {
  return {
    type: types.REMOVING_PAYMENT_METHOD_SUCCESS
  }
}

export const removingPaymentMethodFailure = (error) => {
  return { 
    type: types.REMOVING_PAYMENT_METHOD_FAILURE,
    payload: {
      error
    } 
  }
}

export const clearPaymentMethods = () => {
  return {
    type: types.CLEAR_PAYMENT_METHODS_FROM_STORE,
  }
}