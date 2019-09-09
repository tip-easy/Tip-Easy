import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
    <main>
      <Router>
        <Switch>
          {/* DEFAULT: Select Tipping Amount */}
          <Route path="/" exact render={props => (<SelectAmount {...props} />)} />


          {/* -- AUTHENTICATION --- */}
            {/* Login & Registration */}
            <Route path="/welcome" render={props => (<Auth {...props} />)} />


          {/* --- TIPPING FLOW --- */}
            {/* Enter Tip Receiver Code */}
            <Route path="/select-tip-receiver" render={props => (<EnterCode {...props} />)} />

            {/* Tipping Success Page */}
            <Route path="/tip-success" render={props => (<PaymentSuccess {...props} />)} />

          {/* --- PAYMENT METHOD FLOW --- */}
            {/* Select Payment Method */}
            <Route path="/select-payment-method" render={props => (<SelectPaymentMethod {...props} />)} />
          
            {/* Enter Payment Method Details */} 
            {/* Add Payment Method; includes CC number, name, etc. */}
            <Route path="/payment-method-details" render={props => (<PaymentMethodDetails {...props} />)} />
          

          {/* --- USER-RELATED ROUTES --- */}
            {/* User Profile */}
            {/* Contains Receiver Code - if applicable */}
            <Route path="/user" render={props => (<UserProfile {...props} />)} />

            {/* User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <Route path="/user/settings" render={props => (<div/>)} />

            {/* Wallet */}
            {/* Both Sender && Receiver */}
            <Route path="/user/wallet" render={props => (<div/>)} />

          {/* WALLET WITHDRAWAL ROUTES: */}
            {/* Withdraw Tips */}
            {/* Entered from Receiver Wallet */}
            <Route path="/withdraw" render={props => (<div/>)} />

            {/* Withdraw Success */}
            <Route path="/withdraw/success" render={props => (<div/>)} />


          {/* FUND WALLET ROUTES: */}
            {/* Enter Funding Amount */}
            <Route path="/fund" render={props => (<div/>)} />

            {/* Select Funding Method */}
            {/* Same options as Payment Methods; card, PayPal, etc. */}
            <Route path="/fund/method" render={props => (<div/>)} />

            {/* Funding Success */}
            <Route path="/fund/success" render={props => (<div/>)} />

          {/* Catch-All 404 Page */}
          <Route render={props => (<SelectAmount {...props} />)} />
        </Switch>
      </Router>
    </main>
  )
}

export default App
