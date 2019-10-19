import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { logout } from '../../Actions/index';

const ReceiverMenu = (props) => {
    return (
      <div>
        <p>ReceiverMenu</p>

        <div>
          {
            props.location.pathname !== "/wallet" ?  
              <Link to="/wallet">Wallet</Link>
            : 
              null
          }
          <Link to="/withdraw">Withdraw Tips</Link>
          <Link to="/tip/select-amount">Send Tips</Link>
          <Link to="/user/settings">Settings</Link>
        </div>
        <p onClick={() => props.logout()}>Logout</p>
      </div>
    )
};


const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    logout
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReceiverMenu));
