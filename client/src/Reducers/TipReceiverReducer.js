import * as types from './../Actions/actionTypes';

const initialState = {
  
}

export const TipReceiverReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCHING_TIP_RECEIVER_START:
      return {
        ...state,

      }
    
    case types.SEARCHING_TIP_RECEIVER_SUCCESS:
      return {
        ...state,

      }

    case types.SEARCHING_TIP_RECEIVER_FAILURE:
        return {
          ...state,

        }

    case types.TIP_RECEIVER_SET:
        return {
          ...state,

        }

    case types.CLEAR_TIP_RECEIVER_FROM_STORE:
        return {
          ...state,
          
        }

    default: 
      return state
  }
}