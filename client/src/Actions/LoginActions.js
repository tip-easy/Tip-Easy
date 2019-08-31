import axios from 'axios';

import * as creators from './ActionCreators/LoginActionCreators';
import * as userCreators from './ActionCreators/UserActionCreators';
import * as types from './actionTypes';

import {tokenIsNotValid} from '../Utils/tokenIsNotValid'
import {tokenIsValid} from '../Utils/tokenIsValid'
import { pathObj } from '../Utils/pathVariables';

export const login = user_info => dispatch => {
  dispatch(creators.loggingInStart())

  const {email, password} = user_info
  
  // Preliminairy params validation
  if (!email || 
    !password || 
    typeof(email) !== "string" ||
    typeof(password) !== "string" || 
    password.length < 8 ) {
    dispatch(creators.loggingInFailureIncompleteParams());  
  }

  axios.post(`${pathObj.loginPath}`, {
    email, password
  })
    .then(res => {
      dispatch(creators.loggingInSuccess())
      const token = res.data.token

      // Copy of getUser in UserActions. Problems in calling another dispatch inside of dispatch
      dispatch(userCreators.gettingUserStart())

      // Preliminary token validation
      if (!tokenIsValid(token)) {
        return tokenIsNotValid(types.GETTING_USER_FAILURE)
      }
      console.log('made it')
      return axios.get(`${pathObj.getUserPath}`, { 
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        }
      })
        .then(res => {
          dispatch(userCreators.gettingUserSuccess(res.data))
        })
        // GetUser Catch
        .catch(error => {
          dispatch(userCreators.gettingUserFailure(error));
        })
    })
    // Login Catch
    .catch(error => {
      console.log(error)
      dispatch(creators.loggingInFailure(error));
    })
};
