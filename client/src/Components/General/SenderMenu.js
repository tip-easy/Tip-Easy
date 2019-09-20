import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const SenderMenu = (props) => {
    return (
      <div>
        <p>Sender Menu</p>
        <br/><Link to="/wallet">My Account</Link>
        <br/><Link to="/user/settings">Settings</Link><br/>
        <Link to="/">Logout</Link> {/* TO-DO: Implement logout behaviour. For now, redirects back to wallet. */}
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
    
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SenderMenu));
