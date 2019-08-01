import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';


export const login = user_info => dispatch => {
  // Implement further data-checking.
  
  dispatch({type: types.LOGGING_IN_START})
  return axios.post(`${URL}/login`, {
    email: user_info.email, password: user_info.password
  })
    .then(res => {
      dispatch({ 
        type: types.LOGGING_IN_SUCCESS,
        payload: {
          user: res.data.user,
          token: res.data.token,
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.LOGGING_IN_FAILURE, 
        payload: {error} 
      });
    })
};
