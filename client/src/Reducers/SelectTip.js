import * as types from '../Actions/actionTypes';

const initialState = {
  
}

export const SelectTipReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SET_TIP:
      return {
        ...state,

      }
    
    case types.CLEAR_TIP_FROM_STORE:
      return {
        ...state,

      }

    default: 
      return state
  }
}