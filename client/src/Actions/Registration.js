import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const URL = "http://localhost:7000";

export const register = user_info => dispatch => {
  // Clearly define what user_info will contain and manually pass it in the request body.

  dispatch({ type: types.REGISTRATION_START });
  return axios
    .post(`${URL}/register`, user_info)
    .then(res => {
      console.log("REGISTRATION_SUCCESS")
      // dispatch({
      //   type: types.REGISTRATION_SUCCESS,
      //   payload: {
      //     user: res.data.user,
      //     token: res.data.token,
      //   }
      // }) 
    })
    .catch(error => {
      console.log("REGISTRATION_FAILURE")
      // dispatch({ 
      //   type: types.REGISTRATION_FAILURE, 
      //   payload: {error} 
      // });
    })
};
