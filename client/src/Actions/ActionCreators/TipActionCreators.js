import * as types from '../actionTypes';

export const setTipAmount = (selectedTipAmount) => {
  return {
    type: types.SET_SELECTED_TIP_AMOUNT,
    payload: {
      selectedTipAmount: selectedTipAmount,
    },
  }
}

export const clearTipAmount = () => {
  return {
    type: types.CLEAR_SELECTED_TIP_AMOUNT_FROM_STORE,
  }
}

export const setTipReceiverCode = (selectedTipReceiverCode) => {
  return {
    type: types.SET_SELECTED_TIP_RECEIVER_CODE,
    payload: {
      selectedTipReceiverCode: selectedTipReceiverCode
    },
  }
}

export const clearTipReceiverCode = () => {
  return {
    type: types.CLEAR_SELECTED_TIP_RECEIVER_CODE_FROM_STORE,
  }
}

export const setTipReceiver = (selectedTipReceiver) => {
  return {
    type: types.SET_SELECTED_TIP_RECEIVER,
    payload: {
      selectedTipReceiver: selectedTipReceiver
    },
  }
}

export const clearTipReceiver = () => {
  return {
    type: types.CLEAR_SELECTED_TIP_RECEIVER_FROM_STORE,
  }
}

export const setPaymentMethodType = (selectedPaymentMethodType) => {
  return {
    type: types.SET_SELECTED_PAYMENT_METHOD_TYPE,
    payload: {
      selectedPaymentMethodType: selectedPaymentMethodType
    },
  }
}

export const clearPaymentMethodType = () => {
  return {
    type: types.CLEAR_SELECTED_PAYMENT_METHOD_TYPE_FROM_STORE,
  }
}

export const setPaymentMethod = (selectedPaymentMethod) => {
  return {
    type: types.SET_SELECTED_PAYMENT_METHOD,
    payload: {
      selectedPaymentMethod: selectedPaymentMethod
    },
  }
}

export const clearPaymentMethod  = () => {
  return {
    type: types.CLEAR_SELECTED_PAYMENT_METHOD_FROM_STORE,
  }
}

export const clearStore = () => {
  return {
    type: types.CLEAR_ENTIRE_TIP_STORE,
  }
}

