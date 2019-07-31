import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Components
// import { Navigation } from './Components/Nav/Nav'

import { Auth } from './Components/Pages/Auth/Auth';
import { SelectAmount } from './Components/Pages/PaymentFlow/SelectAmount';
import { PaymentMethod } from './Components/Pages/PaymentFlow/PaymentMethod';
import { PaymentDetails } from './Components/Pages/PaymentFlow/PaymentDetails';
import { PaymentSuccess } from './Components/Pages/PaymentFlow/PaymentSuccess';
import { EnterCode } from './Components/Pages/PaymentFlow/EnterCode';
import { UserProfile } from './Components/Pages/UserProfile';

// import { Footer } from './Components/Footer/Footer'; 

const App = () => {
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
        <Route path="/payment-methods" render={props => (<PaymentMethod {...props} />)} />

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

export default App
