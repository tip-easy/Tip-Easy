import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { register } from '../../Actions/RegistrationActions'

export const RegistrationForm = (props) => {
  const user = props.user

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errorMessage, setErrorMessage] = useState(null)

  const goToSelectAmount = () => props.history.replace('/tip/select-amount');
  const goToWallet = () => props.history.replace('/wallet');

  const submitHandler = (event) => {
    setErrorMessage(null)
    event.preventDefault()

    if (password !== passwordConfirmation) {
      return setErrorMessage(">>> Passwords do not match! <<<")
    }

    return props.register({
      email,
      password,
    })
  }

  useEffect(() => {
    // Used to evaluate if Registration and the nested Login and GetUser have been successful and a user object has been returned from the back-end
    if (user.email && localStorage.get('token')) {
      user.accountType === 'sender' ? 
        props.goToSelectAmount()
      : 
        props.goToWallet()
    }
  });

  return (
    <form onSubmit={(event) => submitHandler(event)}>
      
      {/* Holder for error message that only renders when error is defined */}
      <div className="errorMessageHolder">
        {errorMessage}
      </div>

      <div>
        <p>Do You Want To Send Tips Or Receive Them As Well?</p>
        <select>
          <option value="sender">Send Tips</option>
          <option value="receiver">Receive Tips</option>
        </select>
      </div>

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
        <p>Password: <input 
            type="password" 
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
          />
        </p>
      </div>

      <div className="formInputContainer">
        <p>Confirm Password: <input 
            type="password" 
            placeholder="Confirm Password" 
            onChange={(e) => setPasswordConfirmation(e.target.value)}
          />
        </p>
      </div>
        
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
