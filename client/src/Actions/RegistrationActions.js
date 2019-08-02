import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';
import { Login } from './LoginActions';

export const Register = user_info => dispatch => {
  // Clearly define what user_info will contain and manually pass it in the request body.

  dispatch({ 
    type: types.REGISTERING_START 
  });
  return axios.post(`${URL}/api/register`, {user_info})
    .then(res => {
      dispatch({
        type: types.REGISTRATION_SUCCESS
      })
      
      // Found in LoginActions
      Login({
        email: user_info.email, 
        password: user_info.password
      })
    })
    
    .catch(error => {
      dispatch({ 
        type: types.REGISTERING_FAILURE, 
        payload: {error} 
      });
    })
};
