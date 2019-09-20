import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Styling
import "./App.scss";

// Components
import AuthenticationHeader from './Components/General/AuthenticationHeader'

import RouterObject from './Utils/Routes/Routes'

const App = (props) =>  {
  return (
    <Router>
        {/* 
          Header with a Login / Registration Link
          TO-DO: Create a pre-authentication navbar.
        */}
        <AuthenticationHeader / >

      <main>
        <Switch>
          <RouterObject />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
