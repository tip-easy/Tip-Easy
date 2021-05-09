import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom'

import ReceiverWallet from './ReceiverWallet'
import SenderWallet from './SenderWallet'

export const Wallet = (props) => {
  if (props.user.account_type === "receiver") {
    return <ReceiverWallet />
  } else if (props.user.account_type === "sender") {
    return <SenderWallet />
  } else {
    return <Redirect to="/"/>
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
