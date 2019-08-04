import React, { useState } from 'react';
import { connect} from 'react-redux';

import { bindActionCreators } from 'redux';

// Actions
import { login } from './../../../Actions/LoginActions'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    props.login({
      email,
      password,
    })
  }

  return (
    <form onSubmit={(event) => submitHandler(event)}>
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
    login
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(Login);
