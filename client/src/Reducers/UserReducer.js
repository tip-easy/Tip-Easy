import * as types from './../Actions/actionTypes';

const initialState = {
  token: "",
  user: {
    // Having a default / placeholder?
    accountType: "sender",
    name: "Anakin",
    email: "Vader@ImperialAcademy.com",
    profile_img: "",
    unique_code: "AA0000",
    location: "Coruscant",
    organisation: "Sith Order",
    default_curreny: "btc",
  },

  gettingUser: false,
  updatingUser: false,
  resettingPassword: false,
  deletingUser: false,

  gettingUserMessage: "",
  updateMessage: "",
  resettingPasswordMessage: "",
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
    case types.UPDATING_USER_INFO_START:
      return {
        ...state,
        updatingUser: true,

        updateMessage: initialState.updateMessage,
      }

    case types.UPDATING_USER_INFO_SUCCESS:
      return {
        ...state,
        user: action.payload.user,

        updatingUser: false,
      }

    case types.UPDATING_USER_INFO_FAILURE:
      return {
        ...state,
        updatingUser: false,

        updateMessage: "",
      }

    // RESTTING PASSWORD 
    case types.RESETTING_PASSWORD_START:
      return {
        ...state,
        resettingPassword: true,

        resettingPasswordMessage: initialState.resettingPasswordMessage,
      }

    case types.RESETTING_PASSWORD_SUCCESS:
      return {
        ...state,
        resettingPassword: false,

        resettingPasswordMessage: "",
      }

    case types.RESETTING_PASSWORD_FAILURE:
      return {
        ...state,
        resettingPassword: false,

        resettingPasswordMessage: "",
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

    default: 
      return state
  }
}