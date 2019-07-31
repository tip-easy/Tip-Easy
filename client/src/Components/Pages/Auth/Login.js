import React from 'react';

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

export default Login;
