import React, { useState} from 'react';
import { Link } from 'react-router-dom';

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
  const goToSelectAmount = () => props.history.replace('/tip/select-amount');
  const goToWallet = () => props.history.replace('/wallet');

  return (
    <>
      <div className="upperDiv" />
      --- MENU ---
      <br/><Link to="/wallet">My Account</Link>
      <br/><Link to="/user/settings">Settings</Link><br/>
      ------------<br/><br/>

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
            goToWallet={goToWallet}  
          />
          :
          <RegistrationForm 
            goToSelectAmount={goToSelectAmount}
            goToWallet={goToWallet}
          />
        }
      </div>
    </>
  )
}

export default LoggedIn(Auth);
