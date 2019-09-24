import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../Components/General/BackButton'

export const OverviewWithdrawalAccounts = () => {
  return (
    <div>
      <BackButton to="/user/settings" anchorText="Back To Settings" />
      <h2>OverviewWithdrawalAccounts</h2>
      <div>
        <h4>Account 1 - 2222-1111-2222-1111</h4>
        <p>Last used: Sep 9th</p>
      </div>
      <div>
        <h4>Account 1 - 2222-1111-2222-1111</h4>
        <p>Last used: Sep 9th</p>
      </div>
      <p>User can click 'Add Withdraw Method', which'll open up a Stripe window. Afterwards, they'll get taken to <Link to="/withdraw/accounts/success">Successfully Added Withdraw Method</Link></p>
      <p>If there's no account on file, show a pop-up that says "No withdraw method yet. Add one below"</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewWithdrawalAccounts);
