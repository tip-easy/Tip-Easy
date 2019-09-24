import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../../General/BackButton'

export const WithdrawalAmount = (props) => {
  return (
    <div>
      <BackButton to="/wallet" anchorText="Back to Wallet"/>
      <h2>--- WithdrawalAmount ---</h2>
      <br/> INPUT AMOUNT - SIMILAR TO TIP-AMOUNT
      <br/>IF (hasWithdrawAccount)<Link to='/withdraw/accounts' >Select Existing Withdraw Method</Link>
      <br/>ELSE <Link to='/withdraw/accounts' >Select Withdraw Method Type</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalAmount);
