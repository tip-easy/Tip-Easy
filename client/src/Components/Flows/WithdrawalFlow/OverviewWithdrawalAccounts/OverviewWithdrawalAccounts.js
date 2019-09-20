import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const OverviewWithdrawalAccounts = () => {
  return (
    <div>
      <h2>OverviewWithdrawalAccounts</h2>
      <div>
        <h4>Account 1 - 2222-1111-2222-1111</h4>
        <p>Last used: Sep 9th</p>
      </div>
      <div>
        <h4>Account 1 - 2222-1111-2222-1111</h4>
        <p>Last used: Sep 9th</p>
      </div>
      <Link to="/user/settings">Back</Link>
      <p>User can click 'Add Withdraw Method', which'll open up a Stripe window. Afterwards, they'll get taken to <Link to="/withdraw/accounts/success">Successfully Added Withdraw Method</Link></p>
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