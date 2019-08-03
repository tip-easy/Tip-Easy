import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const GetUser = ( token ) => dispatch => {
  // Implement further data-checking.
  
  dispatch({
    type: types.GETTING_USER_START
  })
  return axios.get(`${URL}/api/me`, { 
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
        payload: {error} 
      });
    })
}

export const UpdateUserInfo = ( changes, token ) => dispatch => {
  // Check incoming data in `changes` for one of the provided parameters. If not, reject it.

  dispatch({ 
    type: types.UPDATING_USER_INFO_START 
  })

  return axios.patch(`${URL}/api/me`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
      }
    }, changes)
    .then(res => {
      dispatch({ 
        type: types.UPDATING_USER_INFO_SUCCESS,
        payload: {
          user: res.data.user
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.UPDATING_USER_INFO_FAILURE,
        payload: {error} 
      })
    })
}

export const ResetPassword = ( changes, token ) => dispatch => {
  // Check incoming data in `changes` for one of the provided parameters. If not, reject it.

  requestObject = {
    current_password: changes.current_password,
    new_password: changes.new_password,
    new_password_confirm: new_password_confirm,
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