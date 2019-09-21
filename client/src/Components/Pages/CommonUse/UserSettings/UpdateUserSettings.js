import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'

import BackButton from '../../../General/BackButton'

export const UpdateUserSettings = () => {
  return (
    <div>
      <BackButton to="/user/settings" replace={true} anchorText="Back to User Settings" />
      <br/><br/>--- UpdateUserSettings ---
      <br/>Form with User Info
      <br/>INPUT: Anthony J. Campbell
      <br/>INPUT: Email
      <br/>DROPDOWN ('Change Password'):
      <br/>>>> New Password
      <br/>>>> Confirm New Password
      <br/><Link to='/user/settings'>SAVE</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserSettings);
