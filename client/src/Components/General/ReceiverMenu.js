import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ReceiverMenu = (props) => {
    return (
      <div>
        <p>ReceiverMenu</p>
        <Link to="/withdraw">Withdraw Tips</Link><br/>
        <Link to="tip/select-amount">Send Tips</Link><br/>
        <Link to="/user/settings">Settings</Link><br/>
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ReceiverMenu));
