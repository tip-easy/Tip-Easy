import React, { useState } from 'react';
import { connect} from 'react-redux';

import { bindActionCreators } from 'redux';

// Actions
import { login, getUser } from '../../../../Actions'

const LoginForm = (props) => {
  const { token, user } = props.UserReducer

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    props.login({
      email,
      password,
    })
    // props.getUser(token)
      if (user.email) {
        console.log('here')
        user.accountType === 'sender' ? 
          props.goToSelectAmount()
            : 
          props.goToUserProfile()
      }
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
    UserReducer: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    login,
    getUser
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginForm);
