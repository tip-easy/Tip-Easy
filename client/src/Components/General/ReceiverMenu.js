import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const ReceiverMenu = (props) => {
    return (
      <div>
        <p>ReceiverMenu</p>

        <select>
          {
            props.location.pathname !== "/wallet" ?  
              <option><Link to="/wallet">Wallet</Link></option>
            : 
              null
          }
          <option><Link to="/withdraw">Withdraw Tips</Link></option>
          <option><Link to="/tip/select-amount">Send Tips</Link></option>
          <option><Link to="/user/settings">Settings</Link></option>
          <option><Link to="/">Logout</Link> </option>
        </select>
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
