import React, { useState} from 'react';

// Components
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';

// HOCs
import LoggedIn from '../../Components/HOCs/LoggedIn'

export const Auth = () => {
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
          Log In
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


      {/* Manual breaks are temporary separation until styling can come into effect */}
      <br/><br/><br/>


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
