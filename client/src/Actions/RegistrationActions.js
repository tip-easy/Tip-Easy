import axios from 'axios';
import { URL } from './index';
import * as types from './actionTypes';
import { login } from './LoginActions';

export const register = user_info => dispatch => {
  dispatch({ 
    type: types.REGISTERING_START 
  });

  const {email, password, default_currency} = user_info;
  if (!email || !password || typeof(email) !== "string" || typeof(password) !== "string" || password.length < 8 ) {
    dispatch({ 
      type: types.LOGGING_IN_FAILURE, 
      payload: {
        error: "Make sure you're passing a valid email and password, as well as the default currency!"
      } 
    });  
  }

  return axios.post(`${URL}/api/register`, {email, password, default_currency})
    .then(res => {
      dispatch({
        type: types.REGISTERING_SUCCESS
      })
      
      // Found in LoginActions
      login({
        email: user_info.email, 
        password: user_info.password
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.REGISTERING_FAILURE, 
        payload: {
          error
        } 
      });
    })
};
