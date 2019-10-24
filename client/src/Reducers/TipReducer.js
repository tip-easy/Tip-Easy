import * as types from '../Actions/actionTypes';

const initialState = {
  selectedTipAmount: 0,

  selectedTipReceiverCode: "",
  selectedTipReceiver: {
    // account_type: "receiver",
    // name: "Anthony",
    // email: "anthony@company.com",
    // profile_img: "",
    // unique_code: "DSE2986",
    // location: "Netherlands",
    // organisation: "CoolStuff",
    // default_currency: "eur"
  }, 

  selectedPaymentMethodType: "",
  selectedPaymentMethod: {
    // pay_method_id: "pm_dee11d4e-63c6-4d90-983c-5c9f1e79e96c",
    // pay_method_type: "card",
    // created_at: 1565094311,
    // last_used: 1565097311,
    // brand: "visa",
    // last_4_chars: "4242"
  }
}

export const TipReducer = (state = initialState, action) => {
  switch (action.type) {
    // selectedTipAmount
    case types.SET_SELECTED_TIP_AMOUNT:
      return {
        ...state,
        selectedTipAmount: action.payload.selectedTipAmount,
      }
    
    case types.CLEAR_SELECTED_TIP_AMOUNT_FROM_STORE:
      return {
        ...state,
        selectedTipAmount: initialState.selectedTipAmount
      }

    // selectedTipRecieverCode
    case types.SET_SELECTED_TIP_RECEIVER_CODE:
      return {
        ...state,
        selectedTipReceiverCode: action.payload.selectedTipReceiverCode
      }

    case types.CLEAR_SELECTED_TIP_RECEIVER_CODE_FROM_STORE:
      return {
        ...state,
        selectedTipReceiverCode: initialState.selectedTipReceiverCode
      }

    // selectedTipReceiver
    case types.SET_SELECTED_TIP_RECEIVER:
      return {
        ...state,
        selectedTipReceiver: action.payload.selectedTipReceiver
      }

    case types.CLEAR_SELECTED_TIP_RECEIVER_FROM_STORE:
      return {
        ...state,
        selectedTipReceiver: initialState.selectedTipReceiver
      }

    // selectedPaymentMethodType
    case types.SET_SELECTED_PAYMENT_METHOD_TYPE:
      return {
        ...state,
        selectedPaymentMethodType: action.payload.selectedPaymentMethodType
      }
    
    case types.CLEAR_SELECTED_PAYMENT_METHOD_TYPE_FROM_STORE:
      return {
        ...state,
        selectedPaymentMethodType: initialState.selectedPaymentMethodType
      }

    // selectedPaymentMethod
    case types.SET_SELECTED_PAYMENT_METHOD:
      return {
        ...state,
        selectedPaymentMethod: action.payload.selectedPaymentMethod
      }
    
    case types.CLEAR_SELECTED_PAYMENT_METHOD_FROM_STORE:
      return {
        ...state,
        selectedPaymentMethod: initialState.selectedPaymentMethod
      }

    case types.CLEAR_ENTIRE_TIP_STORE:
      return {
        ...initialState
      }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return {
        ...initialState
      }

    default: 
      return state
  }
}