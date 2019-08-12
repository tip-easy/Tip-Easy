import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

// Check for user account type
// Shown data (all account types):
  // - email address
  // - Change password
    // When clicked, the original input becomes blank for the input of the current password
    // Two more inputs and a submission button pop up directly below for the new password.
    // On submission, send input values to api/me/reset-password through action
  // Wallet 
  // 


export const UserProfile = () => {
  return (
    <div>
      UserProfile
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

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
