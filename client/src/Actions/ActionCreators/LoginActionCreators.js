import * as types from '../actionTypes';

export const loggingInStart = () => {
  return{
    type: types.LOGGING_IN_START
  }
}

export const loggingInFailureIncompleteParams = () => {
  return {
    type: types.LOGGING_IN_FAILURE, 
    payload: {
      error: "Make sure you're passing a valid email and password!"
    } 
  }
}

export const loggingInSuccess = () => {
  return {
    type: types.LOGGING_IN_SUCCESS,
  }
}

export const loggingInFailure = (error) => {
  return {
    type: types.LOGGING_IN_FAILURE, 
    payload: {
      error
    } 
  }
}
