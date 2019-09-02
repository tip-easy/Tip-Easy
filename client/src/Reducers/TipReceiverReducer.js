import * as types from './../Actions/actionTypes';

const initialState = {
  receiverSearchResultsArray: [
    {
      name: "Gabe",
      organisation: "Lambda School",
      unique_code: "AG6373",
      profile_img: "",
      location: ""
    },
    {
      name: "Dustin",
      organisation: "Chick-Fill-A",
      unique_code: "CC1138",
      profile_img: "",
      location: ""
    },
    {
      name: "Tom",
      organisation: "Apple",
      unique_code: "WC4659",
      profile_img: "",
      location: ""
    }
  ],
  
  searchingTipReceivers: false,
  
  searchingTipReceiversMessage: "",
}

export const TipReceiverReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.SEARCHING_TIP_RECEIVER_START:
      return {
        ...state,
        searchingTipReceivers: true,
        
        searchingTipReceiversMessage: initialState.searchingTipReceiversMessage,
      }
    
    case types.SEARCHING_TIP_RECEIVER_SUCCESS:
      return {
        ...state,
        receiverSearchResultsArray: action.payload.receiverSearchResultArray,

        searchingTipReceivers: false,
      }

    case types.SEARCHING_TIP_RECEIVER_FAILURE:
      return {
        ...state,
        searchingTipReceivers: false,

        searchingTipReceiversMessage: action.payload.error
      }

    case types.CAUTION_CLEAR_ENTIRE_STORE:
      return {
        ...initialState
      }

    default: 
      return state
  }
}