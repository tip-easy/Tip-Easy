import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import { Navigation } from './Components/Nav/Nav'

import { Login } from './Components/Pages/Login';
import { Register } from './Components/Pages/Register';
import { SelectAmount } from './Components/Pages/SelectAmount';
import { PaymentMethod } from './Components/Pages/PaymentMethod';
import { PaymentDetails } from './Components/Pages/PaymentDetails';
import { PaymentSuccess } from './Components/Pages/PaymentSuccess';
import { EnterCode } from './Components/Pages/EnterCode';

import { Footer } from './Components/Footer/Footer'; 

const App = () => {
  return (
    <Router>
      <Navigation />

      <main>
        {/* Select Amount */}
        <Route path="/" exact render={props => (<SelectAmount />)} />

        {/* Login */}
        <Route path="/login" render={props => (<Login />)} />

        {/* Register */}
        <Route path="/register" render={props => (<Register />)} />

        {/* Payment Method */}
        <Route path="/payment-methods" render={props => (<PaymentMethod />)} />

        {/* Payment Details */}
        <Route path="/details" render={props => (<PaymentDetails />)} />

        {/* Payment Success */}
        <Route path="/tip/success" render={props => (<PaymentSuccess />)} />

        {/* Enter Code */}
        <Route path="/tip" render={props => (<EnterCode />)} />

      </main>

      <Footer />
    </Router>
  )
}

export default App
