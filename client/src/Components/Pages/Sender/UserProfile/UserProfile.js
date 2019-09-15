import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

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
      <br/>UserProfile is used for both account types <br/>
      After login, tip receivers will be redirected to this page. Tip senders can access it through the menu <br/><br/> 
      
      For tip receivers, this will show the receiver code<br/>
      The basic info of the wallet is shown (i.e. current balance), but a separate button can be pressed to go to /user/wallet to see all the particulars and latest transactions<br/>
      At the bottom of the page, there's a button with 'Send Tip' which then leads to the Sender Payment Flow

      <br/><br/>
      In the case of tip senders, it shows the current wallet balance, the last three tips sent, and basic account info like name<br/><br/>
      <Link to="" ></Link>
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
