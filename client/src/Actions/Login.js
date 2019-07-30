import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';


// export const URL = "*** API URL ***";

export const login = credentials => dispatch => {
  // Implement data-checking further data-checking.
  
  dispatch({type: types.LOGIN_START});
  return axios
    .post(`${URL}/login`,
      {username: credentials.username, password: credentials.password}  
    )
    .then(res => {
      console.log('LOGIN_SUCCESS')
      // dispatch({
      //   type: types.LOGIN_SUCCESS,
      //   payload: {
      //     user: res.data.user, 
      //     token: res.data.token,
      //   } 
      // })
    })
    .catch(error => {
      console.log('LOGIN_FAILURE');
      // dispatch({ 
      //   type: types.LOGIN_FAILURE, 
      //   payload: {error} 
      // });
    })
};
