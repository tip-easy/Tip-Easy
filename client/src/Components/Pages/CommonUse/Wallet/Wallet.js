import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import ReceiverWallet from '../../Receiver/ReceiverWallet/ReceiverWallet'
import SenderWallet from './../../Sender/SenderWallet/SenderWallet'

export const Wallet = (props) => {
  // TO-DO: Add conditional logic that only renders Sender wallet in case the user is a sender
  //        When the user is a receiver, render the receiver wallet (which doubles as a sender wallet)
  // if (props.location.state.receiverSenderWallet = null) {
  //   return <SenderWallet receiverSenderWallet={true} />
  // } else
  if (props.user.account_type === "receiver") {
    return <ReceiverWallet />
  } else if (props.user.account_type === "sender") {
    return <SenderWallet />
  } else {
    return <Redirect to="/welcome"/>
  }
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
