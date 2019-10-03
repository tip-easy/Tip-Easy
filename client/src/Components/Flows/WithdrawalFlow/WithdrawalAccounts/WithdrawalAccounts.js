import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const WithdrawalAccounts = () => {
  return (
    <div>
      --- WithdrawalAccounts ---
      <br/>IF (hasWithdrawAccounts)
      <br/>Show list of different Withdraw Methods, with a `Confirm Withdrawal` pop-up on-click.
      <br/>i.e. `Do you want to send $X to Account Y?`
      <br/><Link to="/withdraw/success" >METHOD 1</Link>
      <br/><Link to="/withdraw/success" >METHOD 2</Link>
      <br/>
      <br/>ELSE i.e. (!hasWithdrawAccounts)
      <br/>Show grid of possible withdrawal options, with a link to Stripe details view/modal
      <br/><Link to="/withdraw/success" >PayPal</Link>
      <br/><Link to="/withdraw/success" >Bank</Link> 
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

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalAccounts);
