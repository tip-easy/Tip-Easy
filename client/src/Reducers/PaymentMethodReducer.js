import * as types from './../Actions/actionTypes';

const initialState = {
  paymentMethodsArray: [
    {
      pay_method_type: "card",
      pay_method_name: "Card"
    },
    {
      pay_method_type: "applepay",
      pay_method_name: "ApplePay"
    },
    // {
    //   pay_method_type: "applepay",
    //   pay_method_name: "ApplePay"
    // },
    // {
    //   pay_method_type: "btclightning",
    //   pay_method_name: "BTC Lightning"
    // }
  ],
  selectedPaymentMethod: {},

  
  fetchingPaymentMethods: false,
  addingPaymentMethod: false,
  removingPaymentMethod: false,

  fetchingPaymentMethodsMessage: "",
  addingPaymentMethodMessage: "",
  removingPaymentMethodMessage: "",
}

export const PaymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload.selectedPaymentMethod
      }

    case types.CLEAR_SELECTED_PAYMENT_METHOD_FROM_STORE:
      return {
        ...state,
        selectedPaymentMethod: initialState.selectedPaymentMethod,
      }

    case types.FETCHING_PAYMENT_METHODS_START:
      return {
        ...state,
        fetchingPaymentMethods: true,

        fetchingPaymentMethodsMessage: initialState.fetchingPaymentMethodsMessage,
      }
    
    case types.FETCHING_PAYMENT_METHODS_SUCCESS:
      return {
        ...state,
        paymentMethodsArray: action.payload.paymentMethodsArray,

        fetchingPaymentMethods: false,
      }

    case types.FETCHING_PAYMENT_METHODS_FAILURE:
      return {
        ...state,
        fetchingPaymentMethods: false,

        fetchingPaymentMethodsMessage: action.payload.error,
      }

    case types.ADDING_PAYMENT_METHOD_START:
      return {
        ...state,
        addingPaymentMethod: true,

        addingPaymentMethodMessage: initialState.addingPaymentMethodMessage,
      }

    case types.ADDING_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        paymentMethodsArray: action.payload.paymentMethodsArray,

        addingPaymentMethod: false,

        addingPaymentMethodMessage: action.payload.successMessage,
      }

    case types.ADDING_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        addingPaymentMethod: false,

        addingPaymentMethodMessage: action.payload.error,
      }

    case types.REMOVING_PAYMENT_METHOD_START:
      return {
        ...state,
        removingPaymentMethod: true,

        removingPaymentMethodMessage: initialState.removingPaymentMethodMessage,
      }

    case types.REMOVING_PAYMENT_METHOD_SUCCESS:
      return {
        ...state,
        paymentMethodsArray: action.paymentMethodsArray,

        removingPaymentMethod: false,
      }

    case types.REMOVING_PAYMENT_METHOD_FAILURE:
      return {
        ...state,
        removingPaymentMethod: false,

        removingPaymentMethodMessage: action.payload.error,
      }

    case types.CLEAR_PAYMENT_METHODS_FROM_STORE:
      return {
      ...state,
        paymentMethodsArray: initialState.paymentMethodsArray,
      }
    
    default: 
      return state
  }
}