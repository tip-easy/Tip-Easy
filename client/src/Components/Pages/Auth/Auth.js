import React, { useState} from 'react';

// Components
import LoginForm from './Elements/LoginForm';
import RegistrationForm from './Elements/RegistrationForm';

export const Auth = (props) => {
  const [page, setPage] = useState('login')

  // These handler methods have to be placed on non-nested components to access props.
  // These get passed to <Login> and <Register>, to be called depending on user interaction and database response.
  const pushToSelectAmount = () => props.history.push('/');
  const pushToUserProfile = () => props.history.push('/user');

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
            pushToSelectAmount={pushToSelectAmount}
            pushToUserProfile={pushToUserProfile}  
          />
          :
          <RegistrationForm 
            pushToSelectAmount={pushToSelectAmount}
            pushToUserProfile={pushToUserProfile}
          />
        }
      </div>
    </>
  )
}

export default Auth;
