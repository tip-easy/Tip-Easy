import * as types from './../Actions/actionTypes';

const initialState = {
  
}

export const PaymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCHING_PAYMENT_METHODS_START:
      return {
        ...state,

      }
    
    case types.FETCHING_PAYMENT_METHODS_SUCCESS:
      return {
        ...state,

      }

    case types.FETCHING_PAYMENT_METHODS_FAILURE:
      return {
        ...state,

      }

    case types.CLEAR_PAYMENT_METHODS_FROM_STORE:
      return {
        ...state,

      }

    case types.ADDING_PAYMENT_METHOD_START:
      return {
        ...state,
        
      }

    case types.ADDING_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,

      }

    case types.ADDING_PAYMENT_METHOD_FAILURE:
      return {
        ...state,

      }

    case types.REMOVING_PAYMENT_METHOD_START:
      return {
        ...state,
        
      }

    case types.REMOVING_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,

      }

    case types.REMOVING_PAYMENT_METHOD_FAILURE:
      return {
        ...state,

      }

    default: 
      return state
  }
}