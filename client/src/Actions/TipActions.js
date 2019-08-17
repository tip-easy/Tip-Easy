import * as types from './actionTypes';

export const setSelectedTipAmountTip = selectedTipAmount => dispatch => {
  return dispatch({
    type: types.SET_SELECTED_TIP_AMOUNT,
    payload: {
      selectedTipAmount: selectedTipAmount,
    },
  })
}

export const clearSelectedTipAmountFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_SELECTED_TIP_AMOUNT_FROM_STORE,
  })
}

export const setSelectedTipReceiverCode = (selectedTipReceiverCode) => dispatch => {
  return dispatch({
    type: types.SET_SELECTED_TIP_RECEIVER_CODE,
    payload: {
      selectedTipReceiverCode: selectedTipReceiverCode
    },
  })
}

export const clearSelectedTipReceiverCodeFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_SELECTED_TIP_RECEIVER_CODE_FROM_STORE,
  })
}

// selectedTipReceiver
export const setSelectedTipReceiver = (selectedTipReceiver) => dispatch => {
  return dispatch({
    type: types.SET_SELECTED_TIP_RECEIVER,
    payload: {
      selectedTipReceiver: selectedTipReceiver
    },
  })
}

export const clearSelectedTipReceiverFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_SELECTED_TIP_RECEIVER_FROM_STORE,
  })
}

// selectedPaymentMethodType
export const setSelectedPaymentMethodType = (selectedPaymentMethodType) => dispatch => {
  return dispatch({
    type: types.SET_SELECTED_PAYMENT_METHOD_TYPE,
    payload: {
      selectedPaymentMethodType: selectedPaymentMethodType
    },
  })
}

export const clearSelectedPaymentMethodTypeFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_SELECTED_PAYMENT_METHOD_TYPE_FROM_STORE,
  })
}

// selectedPaymentMethod
export const setSelectedPaymentMethod = (selectedPaymentMethod) => dispatch => {
  return dispatch({
    type: types.SET_SELECTED_PAYMENT_METHOD,
    payload: {
      selectedPaymentMethod: selectedPaymentMethod
    },
  })
}

export const clearSelectedPaymentMethodFromStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_SELECTED_PAYMENT_METHOD_FROM_STORE,
  })
}

// entire Store
export const clearEntireTipStore = () => dispatch => {
  return dispatch({
    type: types.CLEAR_ENTIRE_TIP_STORE,
  })
}