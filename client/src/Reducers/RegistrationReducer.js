import * as types from '../Actions/actionTypes';

const initialState = {
  registering: false,
  
  successMessage: "",

  errorMessage: ""
}

export const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTERING_START:
      return {
        ...state,
        registering: true,
      }
    
    case types.REGISTERING_SUCCESS:
      return {
        ...state,
        successMessage: action.payload.successMessage,
        registering: false,
      }

    case types.REGISTERING_FAILURE:
      return {
        ...state,
        registering: false,

        errorMessage: "",
      }

    case types.REGISTERING_FAILURE_INVALID_PARAMS:
      return {
        ...state,
        registering: false,

        errorMessage: action.payload.error,
      }


    case types.REGISTERING_FAILURE_NO_ACCOUNT_TYPE:
      return {
        ...state,
        registering: false,

        errorMessage: "",
      }

    case types.REGISTERING_FAILURE_DUPLICATE_EMAIL:
      return {
        ...state,
        registering: false,

        errorMessage: "",
      }

    case types.REGISTERING_FAILURE_PASSWORD_INVALID_CHARACTERS:
      return {
        ...state,
        registering: false,

        errorMessage: "",
      }
    
    case types.REGISTERING_FAILURE_PASSWORDS_DONT_MATCH:
      return {
        ...state,
        registering: false,

        errorMessage: "",
      }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return {
        ...initialState
      }

    default: 
      return state
  }
}