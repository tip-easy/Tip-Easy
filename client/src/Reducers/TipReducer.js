import * as types from '../Actions/actionTypes';

const initialState = {
  tip: 0,
}

export const TipReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TIP_AMOUNT:
      return {
        ...state,
        tip: action.payload.tip,
      }
    
    case types.CLEAR_TIP_AMOUNT_FROM_STORE:
      return {
        ...state,
        tip: initialState.tip
      }

    default: 
      return state
  }
}