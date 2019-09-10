import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import ReceiverWallet from '../../Receiver/ReceiverWallet/ReceiverWallet'
import SenderWallet from './../../Sender/SenderWallet/SenderWallet'

export const Wallet = () => {
  // TO-DO: Add conditional logic that only renders Sender wallet in case the user is a sender
  //        When the user is a receiver, render the receiver wallet (which doubles as a sender wallet)
  return (
    <div>
      <ReceiverWallet />
      <SenderWallet />
    </div>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
