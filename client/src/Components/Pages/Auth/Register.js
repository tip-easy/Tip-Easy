import React, { useState } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { register } from './../../../Actions/RegistrationActions'

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault()
    props.register({
      email,
      password,
    })
    if (props.user.name) {
      props.user.accountType === 'sender' ? 
        props.pushToSelectAmount()
          : 
        props.pushToUserProfile()
    }
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
        placeholder="Email" 
        onChange={(e) => setEmail(e.target.value)}  
      />
      <input 
        type="password" 
        placeholder="Password" 
        onChange={(e) => setPassword(e.target.value)}
      />
        
      <button onClick={(event) => submitHandler(event)}>
        Sign Up
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
    register
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);
