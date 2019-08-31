import * as types from './../Actions/actionTypes';

const initialState = {
  paymentMethodsArray: [
    {
      pay_method_id: "111-222-333-444",
      pay_method_name: "card",
      created_at: 1560000000,
      last_used: 1565090000,
      brand: "amex",
      last_4_chars: "8008",
    },
    // {
    //   pay_method_id: "111-222-333-444",
    //   pay_method_name: "card",
    //   created_at: 1565094311,
    //   last_used: 1565097311,
    //   brand: "visa",
    //   last_4_chars: "4242",
    // },
    // {
    //   pay_method_type: "applepay",
    //   pay_method_name: "ApplePay"
    // },
    // {
    //   pay_method_type: "btclightning",
    //   pay_method_name: "BTC Lightning"
    // }
  ],

  fetchingPaymentMethods: false,
  addingPaymentMethod: false,
  removingPaymentMethod: false,

  fetchingPaymentMethodsMessage: "",
  addingPaymentMethodMessage: "",
  removingPaymentMethodMessage: "",
}

export const PaymentMethodReducer = (state = initialState, action) => {
  switch (action.type) {
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
    
    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return initialState

    default: 
      return state
  }
}