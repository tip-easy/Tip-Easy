import axios from 'axios';

import * as creators from './ActionCreators/LoginActionCreators';

import { pathObj } from '../Utils/pathVariables';
import { getUser } from './UserActions'

export const login = user_info => dispatch => {
  dispatch(creators.loggingInStart())

  const {email, password} = user_info
  
  // Preliminairy params validation
  if (!email || 
    !password || 
    typeof(email) !== "string" ||
    typeof(password) !== "string" || 
    password.length < 8 ) 
  {
    dispatch(creators.loggingInFailureIncompleteParams());  
  }

  axios.post(`${pathObj.loginPath}`, {
    email, password
  })
    .then(res => {
      dispatch(creators.loggingInSuccess())
      // Found in UserActions
      getUser({
        token: res.data.token,
      })
    })

    .catch(error => {
      dispatch(creators.loggingInFailure(error));
    })
};
