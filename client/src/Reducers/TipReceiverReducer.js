import * as types from './../Actions/actionTypes';

const initialState = {
  receiverSearchResultsArray: [
    {
      name: "Gabe",
      company: "Lambda School",
      code: "AG6373",
      imgUrl: "",
      imgAlt: "",
    },
    {
      name: "Dustin",
      company: "Chick-Fill-A",
      code: "CC1138",
      imgUrl: "",
      imgAlt: "",
    },
    {
      name: "Tom",
      company: "Apple",
      code: "WC4659",
      imgUrl: "",
      imgAlt: "",
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

    default: 
      return state
  }
}