import * as types from './actionTypes';

export const setTip = amount => dispatch => {
  return dispatch({
    type: types.SET_TIP,
    payload: {
      tip: amount,
    },
  })
}

export const clearTip = () => dispatch => {
  return dispatch({
    type: types.CLEAR_TIP_FROM_STORE,
  })
}