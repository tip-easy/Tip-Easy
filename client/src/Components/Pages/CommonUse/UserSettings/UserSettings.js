import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link, Redirect } from 'react-router-dom'

export const UserSettings = (props) => {
  if (props.user.account_type === "receiver") {
    return <div>
      <h2>--- UserSettings (RECEIVER) ---</h2>
      <br/>User Info
      <br/>Anthony J. Campbell
      <br/>Email
      <br/><Link to='/user/settings/update'>EDIT PERSONAL INFO</Link>
      <br/>
      <br/><Link to="/withdraw/accounts">WITHDRAW METHODS OVERVIEW</Link>
      <br/><Link to="/payment-methods">PAYMENT METHODS OVERVIEW</Link>
    </div>
  } else if (props.user.account_type === "sender") {
    return <div>
      <h2>--- UserSettings (SENDER) ---</h2>
      <br/>User Info
      <br/>Anthony J. Campbell
      <br/>Email
      <br/><Link to='/user/settings/update'>EDIT PERSONAL INFO</Link>
      <br/>
      <br/><Link to="/payment-methods">PAYMENT METHODS OVERVIEW</Link>
    </div>
  } else {
    return <Redirect to="/welcome"/>
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
