import React from 'react'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SenderMenu from './SenderMenu';
import ReceiverMenu from './ReceiverMenu';

const Navbar = (props) => {
  const { user } = props.UserReducer

    return (
      <div className="navbar" style={{
        display: "flex", 
        justifyContent: "space-between", 
        borderBottom: "1px solid black",
        marginBottom: "10px"
      }}>
        <h3>-- Navbar ---</h3>
        {
          props.history.location.pathname === "/welcome" ||  props.history.location.pathname === "/" ?
            <>
              <h3>Login</h3>
              <h3>Sign Up</h3>
            </>
          : 
            user.account_type === "receiver" ?
              <ReceiverMenu />
            :
              <SenderMenu />
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));
