import * as types from '../actionTypes';

export const searchingTipReceiverStart = () => {
  return {
    type: types.SEARCHING_TIP_RECEIVER_START
  }
}

export const searchingTipReceiverSuccess = (receiverArray) => {
  return { 
    type: types.SEARCHING_TIP_RECEIVER_SUCCESS,
    payload: {
      receiverSearchResultArray: receiverArray
    }
  }
}

export const searchingTipReceiverFailure = (error) => {
  return { 
    type: types.SEARCHING_TIP_RECEIVER_FAILURE, 
    payload: {
      error
    } 
  }
}

export const setTipReceiverCode = (selectedTipReceiverCode) => {
  return {
    type: types.SET_SELECTED_TIP_RECEIVER_CODE,
    payload: {
      selectedTipReceiverCode: selectedTipReceiverCode
    }
  }
}

export const clearTipReceiver = () => {
  return {
    type: types.CLEAR_SELECTED_TIP_RECEIVER_CODE_FROM_STORE,
  }
}

