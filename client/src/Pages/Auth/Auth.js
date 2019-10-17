import React, { useState} from 'react';

// Components
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

// HOCs
import LoggedIn from '../../Components/HOCs/LoggedIn'

export const Auth = (props) => {
  const [page, setPage] = useState('login')

  return (
    <>
      <div className="buttonRow">
        <button 
          onClick={() => {
            setPage('login'); 
          }}
          disabled={page === 'login'}
        >
          Login
        </button>

        <button 
          onClick={() => {
            setPage('register');
          }}
          disabled={page === 'register'}  
        >
          Register
        </button>
      </div>

      <div className="formContainer">
        {page === 'login' ? 
          <LoginForm />
          :
          <RegistrationForm />
        }
      </div>
    </>
  )
}

export default LoggedIn(Auth);
