import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../Components/General/BackButton'

export const FundingAmount = () => {
  return (
    <div>
      <BackButton to="/wallet" anchorText="Back to Wallet" />
      <h2>FundingAmount</h2>
      <p>Similar to `SelectAmount`, user picks the funding amount, which is then stored in the store</p>
      <Link to="/funding/select-account">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(FundingAmount);
