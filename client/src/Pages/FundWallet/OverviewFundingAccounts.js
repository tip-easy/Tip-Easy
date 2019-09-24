import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../Components/General/BackButton'

export const OverviewFundingAccounts = () => {
  return (
    <div>
      <h2>OverviewFundingAccounts</h2>
      
      <BackButton to="/user/settings" anchorText="Back to Settings" />
      <br/>There's a list of all funding accounts on record, similar to the one found in FundingAccounts
      <br/>There's a button to Add New Funding method, which'll open up a Stripe modal. After success, user will be taken to <Link to="/funding/success">Success</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewFundingAccounts);
