import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';

import { GetUser } from './UserActions'

export const login = user_info => dispatch => {
  // Implement further data-checking.
  let credentials = {
    email: user_info.email,
    password: user_info.password
  }
  dispatch({
    type: types.LOGGING_IN_START
  })
  return axios.post(`${URL}/api/login`, {
    credentials
  })
    .then(res => {
      dispatch({ 
        type: types.LOGGING_IN_SUCCESS,
      })
      // Found in UserActions
      GetUser({
        credentials,
        token: res.data.token,
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.LOGGING_IN_FAILURE, 
        payload: {error} 
      });
    })
};
