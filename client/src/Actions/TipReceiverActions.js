import axios from 'axios';
import URL from './index';
import * as types from './actionTypes';

export const SearchForTipReceiver = (code) => dispatch => {
  dispatch({
    type: types.SEARCHING_TIP_RECEIVER_START
  })

  return axios.get(`${URL}/api/find-receiver?s=${code}`, { 
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `${token}`,
    }
  })
    .then(res => {
      dispatch({ 
        type: types.SEARCHING_TIP_RECEIVER_SUCCESS,
        payload: {
          receiverSearchResultArray: res.data.receiverArray
        }
      })
    })

    .catch(error => {
      dispatch({ 
        type: types.SEARCHING_TIP_RECEIVER_FAILURE, 
        payload: {error} 
      });
    })
}

export const SelectTipReceiver = (code) => dispatch => {
  dispatch({
    type: types.TIP_RECEIVER_SET,
    payload: {
      selectedTipReceiverCode: code
    }
  })
}

export const ClearTipReceiver = () => dispatch => {
  dispatch({
    type: types.CLEAR_TIP_RECEIVER_FROM_STORE,
  })
}