import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

export const UserSettings = (props) => {
  return (
    <div>
      --- UserSettings ---
      <br/>User Info
      <br/>Anthony J. Campbell
      <br/>Email
      <br/><Link to='/user/settings/update'>EDIT PERSONAL INFO</Link>
      <br/>
      <br/><Link to="/">WITHDRAW METHODS OVERVIEW</Link>
      <br/><Link to="/">PAYMENT METHODS OVERVIEW</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSettings);
