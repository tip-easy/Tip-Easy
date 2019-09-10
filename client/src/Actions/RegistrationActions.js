import axios from 'axios';

import * as creators from './ActionCreators/RegistrationActionCreators';

import { endpointURLs } from '../Utils/pathVariables';
import { login } from './LoginActions';

export const register = user_info => dispatch => {
  dispatch(creators.registeringStart());

  if (!user_info.email || !user_info.password || typeof(user_info.email) !== "string" || typeof(user_info.password) !== "string" || user_info.password.length < 6 ) {
      return dispatch(creators.registeringFailureInvalidParams());  
  }

  const {email, password, default_currency} = user_info;
  
  axios.post(`${endpointURLs.registrationPath}`, {email, password, default_currency})
    .then(res => {
      dispatch(creators.registeringSuccess(res.data.message))
      
      // Found in LoginActions
      return dispatch(login({
        email, 
        password
      }))
    })
    
    .catch(error => {
      return dispatch(creators.registeringFailure(error));
    })
};
