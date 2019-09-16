import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const ReceiverWallet = (props) => {
  return (
    <div>
      --- ReceiverWallet ---
      <br/><Link to='/show-code'>Show Code</Link>
      <br/><Link to='/withdraw'>Withdraw</Link>
      <br/><Link to='/tip/select-amount'>Send Tip</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverWallet);
