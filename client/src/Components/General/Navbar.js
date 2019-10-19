import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import SenderMenu from './SenderMenu';
import ReceiverMenu from './ReceiverMenu';

const Navbar = (props) => {
  const { user } = props.UserReducer

  return (
    // Rendering of Navbar is currently conditional on account info being present in Redux store
    // TO-DO: Implement more elaborate checks based on token and account info (after authentication implementation)
    user.account_type && props.UserReducer.token
      ? 
    (
      <div className="navbar" style={{
        display: "flex", 
        justifyContent: "space-between", 
        borderBottom: "1px solid black",
        marginBottom: "10px"
      }}>
        <h3><Link to="/">TipEasy</Link></h3>
        {
            user.account_type === "receiver" ?
              <ReceiverMenu />
            :
              <SenderMenu />
        }
      </div>
    )
      :
    null
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
