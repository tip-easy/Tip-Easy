import React from 'react'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const Navbar = (props) => {
  const { token, user } = props.UserReducer

  // On Login / Registration page, neither a Login button should be present (superfluous) 
  // nor a link to a hamburger menu, since a logged-in user should never have access to the authentication page
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
            <h3>MENU</h3>
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
