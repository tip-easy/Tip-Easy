import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid';
import { tokenIsNotValid } from './../Helpers/tokenIsNotValid';

export const getUser = ( token ) => dispatch => {
  dispatch({
    type: types.GETTING_USER_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.GETTING_BALANCE_FAILURE)
  }

  return axios.get(`${URL}/me`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.GETTING_USER_SUCCESS,
        payload: {
          user: res.data.user,
          token
        }
      })
    })
    .catch(error => {
      dispatch({ 
        type: types.GETTING_USER_FAILURE, 
        payload: {
          error
        } 
      });
    })
}

export const patchUserInfo = ( changes, token ) => dispatch => {
  dispatch({ 
    type: types.PATCHING_USER_INFO_START 
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.PATCHING_USER_INFO_FAILURE)
  }

  // TO-DO: Figure out how to do param validation for incoming `changes` object.

  return axios.patch(`${URL}/me`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, changes)
    .then(res => {
      dispatch({ 
        type: types.PATCHING_USER_INFO_SUCCESS,
        payload: {
          user: res.data.user
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.PATCHING_USER_INFO_FAILURE,
        payload: {error} 
      })
    })
}

export const changePassword = ( changes, token ) => dispatch => {
  dispatch({ 
    type: types.CHANGING_PASSWORD_START 
  })
  
  // Reformatting incoming changes object for param validation
  const requestObject = {
    current_password: changes.current_password,
    new_password: changes.new_password,
    new_password_confirm: changes.new_password_confirm,
  }

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.CHANGING_PASSWORD_FAILURE)
  }

  return axios.put(`${URL}/me/reset-password`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch({ 
        type: types.CHANGING_PASSWORD_SUCCESS,
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.CHANGING_PASSWORD_FAILURE,
        payload: {
          error
        } 
      })
    })
}

export const deleteUser = ( token ) => dispatch => {
  dispatch({
    type: types.DELETING_USER_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return tokenIsNotValid(types.DELETING_USER_FAILURE)
  }

  return axios.delete(`${URL}/me`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    })
    .then(res => {
      dispatch({
        type: types.DELETING_USER_SUCCESS
      })
      // Since Deletion of an account immediately results in logging out, should the ENTIRE store be cleared?
      // TODO: (?) Add general store reset action type to all reducers
      logout()
    })
    
    .catch(error => {
      dispatch({ 
        type: types.DELETING_USER_FAILURE,
        payload: {
          error
        } 
      })
    })
}

// On logout, which can only be done through the UserProfile, clear the entire store by calling every individual CLEAR action
// >>> Find a way to clear the entire store in a single go.
export const logout = () => dispatch => {
  localStorage.clear('token')
  dispatch({ 
    type: types.CAUTION_CLEAR_ENTIRE_STORE
  })
};