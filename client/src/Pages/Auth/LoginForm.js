import React, { useState, useEffect } from 'react';
import { connect} from 'react-redux';
import { withRouter } from 'react-router-dom'; 

import { bindActionCreators } from 'redux';

// Actions
import { login } from '../../Actions'

const LoginForm = (props) => {
  const user = props.user

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToSelectAmount = () => props.history.replace('/tip/select-amount');
  const goToWallet = () => props.history.replace('/wallet');

  const submitHandler = (event) => {
    event.preventDefault();
    props.login({
      email,
      password,
    })
  }

  // TO-DO: Create validation function for email address:
  //        - Length
  //        - @ symbol
  //        - .XXX extension

  // TO-DO: Create validation function for password:
  //        - Length
  //        - Special characters
  //        - Alphanumeric characters

  useEffect(() => {
    // Used to evaluate if the Login and nested GetUser have been successful 
    // Check for a user object in the Redux store.
    // This is a temporary measure until proper authentication can be implemented
    if (user.email) {
      user.account_type === 'sender' ? 
        goToSelectAmount()
      : 
        // In case of user being a Receiver
        goToWallet()
    }
  });


  return (
      <form onSubmit={(event) => submitHandler(event)}>

        <div className="formInputContainer">
          <p>
            Email: <input 
                type="text" 
                placeholder="Email" 
                onChange={(e) => setEmail(e.target.value)}
              />
          </p>
        </div>   

        <div className="formInputContainer">
          <p>
            Password: <input 
              type="password" 
              placeholder="Password" 
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
        </div>
          
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
)(withRouter(LoginForm));
