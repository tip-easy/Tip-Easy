import * as types from '../actionTypes';

export const registeringStart = () => {
  return { 
    type: types.REGISTERING_START 
  }
}

export const registeringFailureInvalidParams = () => {
  return { 
    type: types.REGISTERING_FAILURE_INVALID_PARAMS, 
    payload: {
      error: "Make sure you're passing a valid email and password, as well as the default currency!"
    } 
  }
}

export const registeringSuccess = (successMessage) => {
  return {
    type: types.REGISTERING_SUCCESS,
    payload: {
      successMessage: successMessage
    }
  }
}

export const registeringFailure = (error) => {
  return { 
    type: types.REGISTERING_FAILURE, 
    payload: {
      error
    } 
  }
}
