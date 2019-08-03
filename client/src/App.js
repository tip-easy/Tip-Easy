import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.scss";

// Components
// import { Navigation } from './Components/Nav/Nav'

import { Auth } from './Components/Pages/Auth/Auth';
import { SelectAmount } from './Components/Pages/PaymentFlow/SelectAmount/SelectAmount';
import { PaymentMethod } from './Components/Pages/PaymentFlow/PaymentMethod/PaymentMethod';
import { PaymentDetails } from './Components/Pages/PaymentFlow/PaymentDetails/PaymentDetails';
import { PaymentSuccess } from './Components/Pages/PaymentFlow/PaymentSuccess/PaymentSuccess';
import { EnterCode } from './Components/Pages/PaymentFlow/EnterCode/EnterCode';
import { UserProfile } from './Components/Pages/UserProfile/UserProfile';

// import { Footer } from './Components/Footer/Footer'; 

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        {/* Commented out for now until we decide on if we need a header */}
        {/* <Navigation /> */}
  
        <main>
  
          {/* Select Amount */}
          <Route path="/" exact render={props => (<SelectAmount {...props} />)} />
  
          {/* Login & Registration */}
          <Route path="/welcome" render={props => (<Auth {...props} />)} />
  
          {/* Payment Method */}
          <Route path="/payment-method" render={props => (<PaymentMethod {...props} />)} />
  
          {/* Payment Details */}
          <Route path="/details" render={props => (<PaymentDetails {...props} />)} />
  
          {/* Payment Success */}
          <Route path="/tip/success" render={props => (<PaymentSuccess {...props} />)} />
  
          {/* Enter Code */}
          <Route path="/tip" render={props => (<EnterCode {...props} />)} />
  
          {/* Enter Code */}
          <Route path="/user" render={props => (<UserProfile {...props} />)} />
  
        </main>
  
        {/* Commented out for now until we decide on if we need a footer */}
        {/* <Footer /> */}
      </Router>
    )
  }
}

export default App
