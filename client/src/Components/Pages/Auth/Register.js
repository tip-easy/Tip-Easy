import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const Register = ({ pushToSelectAmount, pushToUserProfile, }) => {
  const submitHandler = (event) => {
    event.preventDefault()
    console.log('Submit');
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      
      {/* Not 100% sure how I'm going to implement dropdown just yet */}
      {/* Thinking of using react-dropdown, https://reactjsexample.com/a-dead-simple-dropdown-component-for-react/ */}
      <div className="dropdown">
        Send or Receive Tips?
      </div>

      <input 
        type="text" 
        placeholder="Email" />
      <input 
        type="password" 
        placeholder="Password" />
        
      <button onClick={(event) => submitHandler(event)}>
        Sign Up
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
