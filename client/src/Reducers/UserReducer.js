import * as types from './../Actions/actionTypes';

const initialState = {
  token: "XXXXX",
  user: {
    // Having a default / placeholder?
    account_type: "sender",
    name: "Anakin",
    email: "Vader@ImperialAcademy.com",
    profile_img: "",
    unique_code: "AA0000",
    location: "Coruscant",
    organisation: "Sith Order",
    default_currency: "usd",
  },

  gettingUser: false,
  patchingUser: false,
  changingPassword: false,
  deletingUser: false,

  gettingUserMessage: "",
  patchMessage: "",
  changingPasswordMessage: "",
  deleteMessage: "",
}

export const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GETTING_USER_START:
      return {
        ...state,
        gettingUser: true,

        gettingUserMessage: initialState.gettingUserMessage,
      }

    case types.GETTING_USER_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,

        gettingUser: false,
      }

    case types.GETTING_USER_FAILURE:
      return {
        ...state,
        gettingUser: false,

        gettingUserMessage: action.payload.error,
      }
  
    case types.CLEAR_USER_FROM_STORE:
      return {
        ...state,
        token: initialState.token,
        user: initialState.user,
      }

    // UPDATING USER INFO
    case types.PATCHING_USER_INFO_START:
      return {
        ...state,
        patchingUser: true,

        patchMessage: initialState.updateMessage,
      }

    case types.PATCHING_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.user,

        patchingUser: false,
      }

    case types.PATCHING_USER_INFO_FAILURE:
      return {
        ...state,
        patchingUser: false,

        patchMessage: "",
      }

    // RESTTING PASSWORD 
    case types.CHANGING_PASSWORD_START:
      return {
        ...state,
        changingPassword: true,

        changingPasswordMessage: initialState.changingPasswordMessage,
      }

    case types.CHANGING_PASSWORD_SUCCESS:
      return {
        ...state,
        changingPassword: false,

        changingPasswordMessage: action.payload.message,
      }

    case types.CHANGING_PASSWORD_FAILURE:
      return {
        ...state,
        changingPassword: false,

        changingPasswordMessage: "",
    }

    // DELETING USER
    case types.DELETING_USER_START:
      return {
        ...state,
        deletingUser: true,

        deleteMessage: initialState.deleteMessage,
      }

    case types.DELETING_USER_SUCCESS:
      return {
        ...state,
        deletingUser: false,

        deleteMessage: "",
      }

    case types.DELETING_USER_FAILURE:
      return {
        ...state,
        deletingUser: false,

        deleteMessage: "",
      }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return {
        ...initialState
      }

    default: 
      return state
  }
}