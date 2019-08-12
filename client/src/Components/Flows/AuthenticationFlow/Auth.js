import React, { useState} from 'react';

// Components
import LoginForm from './Elements/LoginForm';
import RegistrationForm from './Elements/RegistrationForm';

// HOCs
import LoggedIn from './../../HOCs/LoggedIn'

// TO-DO: Add HOC to check for user info in store.
//        If found, redirect to `SelectAmount` (if Sender) or `ReceiverWallet` (if Receiver)
export const Auth = (props) => {
  const [page, setPage] = useState('login')

  // These handler methods have to be placed on non-nested components to access props.
  // These get passed to <Login> and <Register>, to be called depending on user interaction and database response.
  const goToSelectAmount = () => props.history.replace('/');
  const goToUserProfile = () => props.history.replace('/user');

  return (
    <>
      <div className="upperDiv" />

      <div className="buttonRow">
        <button 
          onClick={() => {
            setPage('login'); 
          }}
          disabled={page === 'login' ? true : false}
        >
          Login
        </button>

        <button 
          onClick={() => {
            setPage('register');
          }}
          disabled={page === 'register' ? true : false}  
        >
          Register
        </button>
      </div>

      <div className="inputContainer">
        {page === 'login' ? 
          <LoginForm
            goToSelectAmount={goToSelectAmount}
            goToUserProfile={goToUserProfile}  
          />
          :
          <RegistrationForm 
            goToSelectAmount={goToSelectAmount}
            goToUserProfile={goToUserProfile}
          />
        }
      </div>
    </>
  )
}

export default LoggedIn(Auth);
