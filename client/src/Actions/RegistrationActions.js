import axios from 'axios';

import * as creators from './ActionCreators/RegistrationActionCreators';

import { pathObj } from '../Utils/pathVariables';
import { login } from './LoginActions';

export const register = user_info => dispatch => {
  dispatch(creators.registeringStart());

  const {email, password, default_currency} = user_info;
  if (!email || !password || typeof(email) !== "string" || typeof(password) !== "string" || password.length < 8 ) {
    dispatch(creators.registeringFailureInvalidParams());  
  }

  return axios.post(`${pathObj.registrationPath}`, {email, password, default_currency})
    .then(res => {
      dispatch(creators.registeringSuccess())
      
      // Found in LoginActions
      login({
        email: user_info.email, 
        password: user_info.password
      })
    })
    
    .catch(error => {
      dispatch(creators.registeringFailure(error));
    })
};
