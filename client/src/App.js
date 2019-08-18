import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

import "./App.scss";

// Components
// import { Navigation } from './Components/Nav/Nav'

import Auth from './Components/Flows/AuthenticationFlow/Auth';
import SelectAmount from './Components/Flows/TippingFlow/SelectAmount/SelectAmount';
import SelectPaymentMethod from './Components/Flows/PaymentMethodFlow/SelectPaymentMethod/SelectPaymentMethod';
import PaymentMethodDetails from './Components/Flows/PaymentMethodFlow/PaymentMethodDetails/PaymentMethodDetails';
import PaymentSuccess from './Components/Pages/CommonUse/PaymentSuccess/PaymentSuccess';
import EnterCode from './Components/Flows/TippingFlow/EnterCode/EnterCode';
import UserProfile from './Components/Pages/Sender/UserProfile/UserProfile';

// import { Footer } from './Components/Footer/Footer'; 

const App = () =>  {
  return (
    <div>
      <Router>
        {/* Commented out for now until we decide on if we need a header */}
        {/* <Navigation /> */}

        <main>

          {/* Select Amount */}
          <Route path="/" exact render={props => (<SelectAmount {...props} />)} />

          {/* Login & Registration */}
          <Route path="/welcome" render={props => (<Auth {...props} />)} />

          {/* Payment Method */}
          <Route path="/payment-method" render={props => (<SelectPaymentMethod {...props} />)} />

          {/* Payment Details */}
          <Route path="/details" render={props => (<PaymentMethodDetails {...props} />)} />

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
    </div>
  )
}

export default App
