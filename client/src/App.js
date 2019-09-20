import React from 'react'
import { BrowserRouter as Router, Switch } from 'react-router-dom';

// Styling
import "./App.scss";

// Components
import Navbar from './Components/General/Navbar'

import RouterObject from './Utils/Routes/Routes'

const App = (props) =>  {
  return (
    <Router>
        
        <Navbar / >

      <main>
        <Switch>
          <RouterObject />
        </Switch>
      </main>
    </Router>
  )
}

export default App;
