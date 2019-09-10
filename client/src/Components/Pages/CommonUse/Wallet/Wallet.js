import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import ReceiverWallet from '../../Receiver/ReceiverWallet/ReceiverWallet'
import SenderWallet from './../../Sender/SenderWallet/SenderWallet'

export const Wallet = () => {
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
