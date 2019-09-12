import axios from 'axios';

import * as types from './actionTypes';
import * as creators from './ActionCreators/UserActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { tokenIsValid } from '../Utils/tokenIsValid';
import { tokenIsNotValid } from '../Utils/tokenIsNotValid';

export const getUser = ( token ) => dispatch => {
  dispatch(creators.gettingUserStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.GETTING_USER_FAILURE))
  }

  return axios.get(`${endpointURLs.getUserPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(res => {
      dispatch(creators.gettingUserSuccess(res.data, token))
    })
    .catch(error => {
      dispatch(creators.gettingUserFailure(error));
    })
}

export const patchUserInfo = ( changes, token ) => dispatch => {
  dispatch(creators.patchingUserInfoStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.PATCHING_USER_INFO_FAILURE))
  }

  // TO-DO: Figure out how to do param validation for incoming `changes` object.

  return axios.patch(`${endpointURLs.patchUserPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, changes)
    .then(res => {
      dispatch(creators.patchingUserInfoSuccess(res.data))
    })

    .catch(error => {
      dispatch(creators.patchingUserInfoFailure(error))
    })
}

export const changePassword = ( changes, token ) => dispatch => {
  dispatch(creators.changingPasswordStart())
  
  // Reformatting incoming changes object for param validation
  const requestObject = {
    current_password: changes.current_password,
    new_password: changes.new_password,
    new_password_confirm: changes.new_password_confirm,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.CHANGING_PASSWORD_FAILURE))
  }

  return axios.put(`${endpointURLs.changePasswordPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch(creators.changingPasswordSuccess(res.data.message))
    })

    .catch(error => {
      dispatch(creators.changingPasswordFailure(error))
    })
}

export const deleteUser = ( token ) => dispatch => {
  dispatch(creators.deletingUserStart())

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch(tokenIsNotValid(types.DELETING_USER_FAILURE))
  }

  return axios.delete(`${endpointURLs.deleteUserPath}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      }
    })
    .then(res => {
      dispatch(creators.deletingUserSuccess())
      // Since Deletion of an account immediately results in logging out, should the ENTIRE store be cleared?
      // TODO: (?) Add general store reset action type to all reducers
      dispatch(logout())
    })
    
    .catch(error => {
      dispatch(creators.deletingUserFailure(error))
    })
}

// On logout, which can only be done through the UserProfile, clear the entire store by calling every individual CLEAR action
// >>> Find a way to clear the entire store in a single go.
export const logout = () => dispatch => {
  localStorage.clear('token')
  dispatch(creators.clearEntireStore())
};