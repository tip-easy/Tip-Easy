import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const WithdrawalAmount = () => {
  return (
    <div>
      --- WithdrawalAmount ---
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
