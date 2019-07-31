import * as types from './../Actions/actionTypes';

const initialState = {
  
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETTING_USER_START:
      return {
        ...state,

      }

    case types.GETTING_USER_SUCCESS:
      return {
        ...state,

      }

    case types.GETTING_USER_FAILURE:
      return {
        ...state,

      }
  
    case types.CLEAR_USER_FROM_STORE:
      return {
        ...state,

      }

    // UPDATING USER INFO
    case types.UPDATING_USER_INFO_START:
      return {
        ...state,

      }

    case types.UPDATING_USER_INFO_SUCCESS:
      return {
        ...state,

      }

    case types.UPDATING_USER_INFO_FAILURE:
      return {
        ...state,
        
      }

    // DELETING USER
    case types.DELETING_USER_START:
      return {
        ...state,

      }

    case types.DELETING_USER_SUCCESS:
      return {
        ...state,

      }

    case types.DELETING_USER_FAILURE:
      return {
        ...state,

      }

    default: 
      return state
  }
}