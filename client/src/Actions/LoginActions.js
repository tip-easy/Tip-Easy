import axios from 'axios';

import * as creators from './ActionCreators/LoginActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { getUser } from './index';

export const login = user_info => dispatch => {
  dispatch(creators.loggingInStart())

  const {email, password} = user_info
  
  // Preliminairy params validation
  if (!email || 
    !password || 
    typeof(email) !== "string" ||
    typeof(password) !== "string" || 
    password.length < 6 ) {
    return dispatch(creators.loggingInFailureIncompleteParams());  
  }

  axios.post(`${endpointURLs.loginPath}`, {
    email, password
  })
    .then(res => {
      dispatch(creators.loggingInSuccess())
      const token = res.data.token
      
      dispatch(getUser(token))
    })
    // Login Catch
    .catch(error => {
      dispatch(creators.loggingInFailure(error));
    })
};
