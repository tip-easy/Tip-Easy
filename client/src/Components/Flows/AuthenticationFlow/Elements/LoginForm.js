import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';

import { bindActionCreators } from 'redux';

// Actions
import { login } from '../../../../Actions'

const LoginForm = (props) => {
  const user = props.user

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    props.login({
      email,
      password,
    })
  }

  useEffect(() => {
    // Used to evaluate if the Login and nested GetUser have been successful and a user object has been returned from the back-end
    if (user.email) {
      user.accountType === 'sender' ? 
        props.goToSelectAmount()
      : 
        // In case of user being a Receiver
        props.goToWallet()
    }
  });


  return (
      <form onSubmit={async (event) => submitHandler(event)}>
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
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginForm);
