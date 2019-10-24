import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../Components/General/BackButton'

export const SetWithdrawalAmount = (props) => {
  return (
    <div>
      <BackButton to="/wallet" anchorText="Back to Wallet"/>
      <h2>--- SetWithdrawalAmount ---</h2>
      <br/> INPUT AMOUNT - SIMILAR TO TIP-AMOUNT
      <br/><Link to='/withdraw/accounts' >Select Existing Withdraw Method</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(SetWithdrawalAmount);
