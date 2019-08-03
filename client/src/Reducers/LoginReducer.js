import * as types from './../Actions/actionTypes';

const initialState = {
  loggingIn: false,
  
  loginErrorMessage: "",
}

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGGING_IN_START:
      return {
        ...state,
        loggingIn: true,

        loginErrorMessage: "",
      }
    
    case types.LOGGING_IN_SUCCESS:
      return {
        ...state,
        loggingIn: false,
      }

    case types.LOGGING_IN_FAILURE:
        return {
          ...state,
          loggingIn: false,

          loginErrorMessage: "Something's gone wrong in trying to log you in. Please try again."
        }

    case types.LOGGING_IN_FAILURE_INVALID_EMAIL:
        return {
          ...state,
          loggingIn: false,

          loginErrorMessage: "That email address is unknown to us. Are you sure it's correct?"
        }

    case types.LOGGING_IN_FAILURE_INVALID_PASSWORD:
        return {
          ...state,
          loggingIn: false,

          loginErrorMessage: "That's not the right password. Are you sure you didn't misspell it?"
        }

    case types.LOGGING_IN_FAILURE_INVALID_PASSWORD_LENGTH:
        return {
          ...state,
          loggingIn: false,

          loginErrorMessage: "Hey! That password isn't long enough, it has to be at least 8 characters long!"
        }

    default: 
      return state
  }
}