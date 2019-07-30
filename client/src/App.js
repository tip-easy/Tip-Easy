import React from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom';

// Components
import { Navigation } from './Components/Nav/Nav'

import { LandingPage } from './Components/Pages/LandingPage';
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
        {/* Landing Page */}
        <Route path="/" exact component={props => (<LandingPage />)} />

        {/* Login */}
        <Route path="/login" component={props => (<Login />)} />

        {/* Register */}
        <Route path="/register" component={props => (<Register />)} />

        {/* Select Amount */}
        <Route path="/tip" exact component={props => (<SelectAmount />)} />

        {/* Payment Method */}
        <Route path="/payment-methods" component={props => (<PaymentMethod />)} />

        {/* Payment Details */}
        <Route path="/details" component={props => (<PaymentDetails />)} />

        {/* Payment Success */}
        <Route path="/tip/success" component={props => (<PaymentSuccess />)} />

        {/* Enter Code */}
        <Route path="/tip/find" component={props => (<EnterCode />)} />

      </main>

      <Footer />
    </Router>
  )
}

export default App
