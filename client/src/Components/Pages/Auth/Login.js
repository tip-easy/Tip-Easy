import React, { Component } from 'react';
import { connect} from 'react-redux';

import { bindActionCreators } from 'redux';

// Actions
import { login } from './../../../Actions/LoginActions'

const Login = (props) => {

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(props)
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      <input 
        type="text" 
        placeholder="Email" />
      <input 
        type="password" 
        placeholder="Password" />
        
      <button onClick={(event) => submitHandler(event)}>
        Log In
      </button>
    </form>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);
