import React, { Component } from 'react';
import { connect} from 'react-redux'

import { bindActionCreators } from 'redux';

// Actions
import { login } from './../../../Actions/LoginActions'

export const Login = ({ pushToSelectAmount, pushToUserProfile }) => {
 
  const submitHandler = (event) => {
    event.preventDefault();
    console.log('test')
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

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    Login
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);
