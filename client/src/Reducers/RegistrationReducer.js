import * as types from '../Actions/actionTypes';

const initialState = {
  
}

export const RegistrationReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.REGISTERING_START:
      return {
        ...state,

      }
    
    case types.REGISTERING_SUCCESS:
      return {
        ...state,

      }

    case types.REGISTERING_FAILURE:
      return {
        ...state,

      }

    case types.REGISTERING_FAILURE_NO_ACCOUNT_TYPE:
      return {
        ...state,

      }

    case types.REGISTERING_FAILURE_DUPLICATE_EMAIL:
      return {
        ...state,
        
      }

    case types.REGISTERING_FAILURE_PASSWORD_INVALID_CHARACTERS:
      return {
        ...state,

      }
    
    case types.REGISTERING_FAILURE_PASSWORDS_DONT_MATCH:
      return {
        ...state,

      }

    default: 
      return state
  }
}