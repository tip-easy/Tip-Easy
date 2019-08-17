import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { getUser } from './UserActions'

export const login = user_info => dispatch => {
  dispatch({
    type: types.LOGGING_IN_START
  })

  const {email, password} = user_info
  
  // Preliminairy params validation
  if (!email || 
    !password || 
    typeof(email) !== "string" ||
    typeof(password) !== "string" || 
    password.length < 8 ) 
  {
    dispatch({ 
      type: types.LOGGING_IN_FAILURE, 
      payload: {
        error: "Make sure you're passing a valid email and password!"
      } 
    });  
  }

  axios.post(`${URL}/login`, {
    email, password
  })
    .then(res => {
      dispatch({ 
        type: types.LOGGING_IN_SUCCESS,
      })
      // Found in UserActions
      getUser({
        token: res.data.token,
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.LOGGING_IN_FAILURE, 
        payload: {
          error
        } 
      });
    })
};
