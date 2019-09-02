import * as types from '../actionTypes';

export const gettingUserStart = () => {
  return {
    type: types.GETTING_USER_START
  }
}

export const gettingUserSuccess = (user, token) => {
  return { 
    type: types.GETTING_USER_SUCCESS,
    payload: {
      token: token,
      user: user
    }
  }
}

export const gettingUserFailure = (error) => {
  return { 
    type: types.GETTING_USER_FAILURE, 
    payload: {
      error
    } 
  }
}

export const patchingUserInfoStart = () => {
  return { 
    type: types.PATCHING_USER_INFO_START 
  }
}

export const patchingUserInfoSuccess = (user) => {
  return { 
    type: types.PATCHING_USER_INFO_SUCCESS,
    payload: {
      user: user
    }
  }
}

export const patchingUserInfoFailure = (error) => {
  return { 
    type: types.PATCHING_USER_INFO_FAILURE,
    payload: {
      error
    } 
  }
}

export const changingPasswordStart = () => {
  return { 
    type: types.CHANGING_PASSWORD_START 
  }
}

export const changingPasswordSuccess = (message) => {
  return { 
    type: types.CHANGING_PASSWORD_SUCCESS,
    payload: {
      message: message
    }
  }
}

export const changingPasswordFailure = (error) => {
  return { 
    type: types.CHANGING_PASSWORD_FAILURE,
    payload: {
      error
    } 
  }
}

export const deletingUserStart = () => {
  return {
    type: types.DELETING_USER_START
  }
}

export const deletingUserSuccess = () => {
  return {
    type: types.DELETING_USER_SUCCESS
  }
}

export const deletingUserFailure = (error) => {
  return { 
    type: types.DELETING_USER_FAILURE,
    payload: {
      error
    } 
  }
}

export const clearEntireStore = () => {
  return { 
    type: types.CAUTION_CLEAR_ENTIRE_STORE
  }
}

