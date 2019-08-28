import * as creators from './ActionCreators/TipActionCreators';

export const setSelectedTipAmount = selectedTipAmount => dispatch => {
  return dispatch(creators.setTipAmount(selectedTipAmount))
}

export const clearSelectedTipAmountFromStore = () => dispatch => {
  return dispatch(creators.clearTipAmount())
}

export const setSelectedTipReceiverCode = (selectedTipReceiverCode) => dispatch => {
  return dispatch(creators.setTipReceiverCode(selectedTipReceiverCode))
}

export const clearSelectedTipReceiverCodeFromStore = () => dispatch => {
  return dispatch(creators.clearTipReceiverCode())
}

// selectedTipReceiver
export const setSelectedTipReceiver = (selectedTipReceiver) => dispatch => {
  return dispatch(creators.setTipReceiver(selectedTipReceiver))
}

export const clearSelectedTipReceiverFromStore = () => dispatch => {
  return dispatch(creators.clearTipReceiver())
}

// selectedPaymentMethodType
export const setSelectedPaymentMethodType = (selectedPaymentMethodType) => dispatch => {
  return dispatch(creators.setPaymentMethodType(selectedPaymentMethodType))
}

export const clearSelectedPaymentMethodTypeFromStore = () => dispatch => {
  return dispatch(creators.clearPaymentMethodType())
}

// selectedPaymentMethod
export const setSelectedPaymentMethod = (selectedPaymentMethod) => dispatch => {
  return dispatch(creators.setPaymentMethod(selectedPaymentMethod))
}

export const clearSelectedPaymentMethodFromStore = () => dispatch => {
  return dispatch(creators.clearPaymentMethod())
}

// entire Store
export const clearEntireTipStore = () => dispatch => {
  return dispatch(creators.clearStore())
}