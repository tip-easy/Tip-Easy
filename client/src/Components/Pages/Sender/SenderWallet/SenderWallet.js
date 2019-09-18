import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

export const SenderWallet = () => {
  return (
    <div>
      --- ReceiverWallet ---
      <br/>
      <br/><Link to="/user/settings">Back</Link>
      <br/>
      <br/><Link to='/funding'>Fund Wallet</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SenderWallet);
