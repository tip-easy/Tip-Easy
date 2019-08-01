import * as types from './actionTypes';

export const SetTip = amount => dispatch => {
  return dispatch({
    type: types.SET_TIP,
    payload: {
      tip: amount,
    },
  })
}

export const ClearTip = () => dispatch => {
  return dispatch({
    type: types.CLEAR_TIP_FROM_STORE,
  })
}