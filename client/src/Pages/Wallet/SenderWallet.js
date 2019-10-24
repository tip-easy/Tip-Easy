import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

export const SenderWallet = () => {
  return (
    <div>
      <h2>SenderWallet</h2>
      <p>*Show current balance and last handful of transactions*</p>
      <br/>
      <br/>
      <p><Link to="/tip/select-amount">Send Tip</Link></p>
      <p>Floating button positioned absolutely at the bottom of the page <Link to='/funding'>Fund Wallet</Link></p>
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
