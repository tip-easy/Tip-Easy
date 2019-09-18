import React from 'react'
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

const AuthenticationHeader = (props) => {
  const { token, user } = props.UserReducer

  // On Login / Registration page, neither a Login button should be present (superfluous) 
  // nor a link to a hamburger menu, since a logged-in user should never have access to the authentication page
  if (props.history.location.pathname === "/welcome" ||  props.history.location.pathname === "/" ) {
    return null
  } else {
    return !token && !user.email 
      ?
        <div 
          className="upperRow"
          onClick={() => props.history.push('/welcome')}
        >
          Log In or Register
        </div> 
      :
        null
        // TO-DO: Add Hamburger Icon with associated dropdown menu, depending on logged-in account type.
        // See UX-Flow
        // <div>
        //   HAMBURGER
        // </div>
  }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AuthenticationHeader));
