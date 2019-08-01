import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';


// On logout, which can only be done through the UserProfile, clear the entire store by calling every individual CLEAR action
// >>> Find a way to clear the entire store in a single go.
export const logout = credentials => dispatch => {
  localStorage.clear('token')
  dispatch({ type: types.CLEAR_USER_FROM_STORE })
};
