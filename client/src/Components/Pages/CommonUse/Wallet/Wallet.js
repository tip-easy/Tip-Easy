import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import ReceiverWallet from '../../Receiver/ReceiverWallet/ReceiverWallet'
import SenderWallet from './../../Sender/SenderWallet/SenderWallet'

export const Wallet = ({user}) => {

  // TO-DO: Add conditional logic that only renders Sender wallet in case the user is a sender
  //        When the user is a receiver, render the receiver wallet (which doubles as a sender wallet)
  return (
    user.account_type === "receiver" ? 
      (
        <ReceiverWallet />
      )
    : 
      (
        <SenderWallet />
      )
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
