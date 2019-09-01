import * as types from '../actionTypes';

export const registeringStart = () => {
  return { 
    type: types.REGISTERING_START 
  }
}

export const registeringFailureInvalidParams = () => {
  return { 
    type: types.LOGGING_IN_FAILURE, 
    payload: {
      error: "Make sure you're passing a valid email and password, as well as the default currency!"
    } 
  }
}

export const registeringSuccess = () => {
  return {
    type: types.REGISTERING_SUCCESS
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
