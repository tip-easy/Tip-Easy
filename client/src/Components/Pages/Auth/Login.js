import React from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const Login = ({ pushToSelectAmount, pushToUserProfile }) => {
  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Submit');
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

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
