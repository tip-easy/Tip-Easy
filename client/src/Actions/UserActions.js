import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { tokenIsValid } from './../Helpers/tokenIsValid'

export const GetUser = ( token ) => dispatch => {
  dispatch({
    type: types.GETTING_USER_START
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.GETTING_USER_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
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

export const PatchUserInfo = ( changes, token ) => dispatch => {
  // Check incoming data in `changes` for one of the provided parameters. If not, reject it.

  dispatch({ 
    type: types.PATCHING_USER_INFO_START 
  })

  // Preliminary token validation
  if (!tokenIsValid(token)) {
    return dispatch({ 
      type: types.PATCHING_USER_INFO_FAILURE, 
      payload: {
        error: "The provided token is invalid, I'm afraid! Make sure it's a string of the appropriate length"
      } 
    });
  }

  // TO-DO: Figure out how to do param validation for incoming `changes` object.

  return axios.patch(`${URL}/api/me`, { 
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

export const ResetPassword = ( changes, token ) => dispatch => {
  // Check incoming data in `changes` for one of the provided parameters. If not, reject it.

  const requestObject = {
    current_password: changes.current_password,
    new_password: changes.new_password,
    new_password_confirm: changes.new_password_confirm,
  }

  dispatch({ 
    type: types.RESETTING_PASSWORD_START 
  })

  return axios.put(`${URL}/api/me/reset-password`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, requestObject)
    .then(res => {
      dispatch({ 
        type: types.RESETTING_PASSWORD_SUCCESS,
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.RESETTING_PASSWORD_FAILURE,
        payload: {error} 
      })
    })
}

export const DeleteUser = ( token ) => dispatch => {
  dispatch({
    type: types.DELETING_USER_START
  })

  return axios.delete(`${URL}/api/me`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    })
    .then(res => {
      dispatch({
        type: types.DELETING_USER_SUCCESS
      })
      dispatch({
        type: types.CLEAR_USER_FROM_STORE
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.DELETING_USER_FAILURE,
        payload: {error} 
      })
    })
}

// On logout, which can only be done through the UserProfile, clear the entire store by calling every individual CLEAR action
// >>> Find a way to clear the entire store in a single go.
export const Logout = credentials => dispatch => {
  localStorage.clear('token')
  dispatch({ 
    type: types.CLEAR_USER_FROM_STORE 
  })
};