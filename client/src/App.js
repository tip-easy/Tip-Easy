import React from 'react'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// Styling
import "./App.scss";

// Components
import AuthenticationHeader from './Components/General/AuthenticationHeader'
import SelectAmount from './Components/Flows/TippingFlow/SelectAmount/SelectAmount';

import Auth from './Components/Flows/AuthenticationFlow/Auth';

import EnterCode from './Components/Flows/TippingFlow/EnterCode/EnterCode';
import SuccessPage from './Components/Pages/CommonUse/SuccessPage/SuccessPage';

import SelectPaymentMethod from './Components/Flows/PaymentMethodFlow/SelectPaymentMethod/SelectPaymentMethod';
import PaymentMethodDetails from './Components/Flows/PaymentMethodFlow/PaymentMethodDetails/PaymentMethodDetails';

import UserProfile from './Components/Pages/Sender/UserProfile/UserProfile';
import UserSettings from './Components/Pages/CommonUse/UserSettings/UserSettings';
import Wallet from './Components/Pages/CommonUse/Wallet/Wallet';

import WithdrawalAmount from './Components/Flows/WithdrawalFlow/WithdrawalAmount/WithdrawalAmount';
import WithdrawalAccounts from './Components/Flows/WithdrawalFlow/WithdrawalAccounts/WithdrawalAccounts';

import FundingAmount from './Components/Flows/FundingFlow/FundingAmount/FundingAmount';
import FundingMethods from './Components/Flows/FundingFlow/FundingMethod/FundingMethods';

const App = (props) =>  {
  return (
    <main>
      <Router>
        <AuthenticationHeader / >
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
            <Route path="/tip/success" render={props => (<SuccessPage {...props} type="tippingSuccess" />)} />


          {/* --- PAYMENT METHOD FLOW --- */}
            {/* Select Payment Method */}
            <Route exact path="/payment-method" render={props => (<SelectPaymentMethod {...props} />)} />
          
            {/* Enter Payment Method Details */} 
            {/* Add Payment Method; includes CC number, name, etc. */}
            <Route path="/payment-method/details" render={props => (<PaymentMethodDetails {...props} />)} />
          
            {/* Add Payment Method Success */}
            <Route path="/payment-method/success" render={props => (<SuccessPage {...props} type="paymentMethod" />)} />


          {/* --- USER-RELATED ROUTES --- */}
            {/* User Profile */}
            {/* Contains Receiver Code - if applicable */}
            <Route exact path="/user" render={props => (<UserProfile {...props} />)} />

            {/* User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <Route path="/user/settings" render={props => (<UserSettings {...props} />)} />

            {/* Wallet */}
            {/* Both Sender && Receiver */}
            <Route path="/user/wallet" render={props => (<Wallet {...props} />)} />


          {/* WALLET WITHDRAWAL ROUTES: */}
            {/* Withdraw Tips */}
            {/* Entered from Receiver Wallet */}
            <Route exact path="/withdraw" render={props => (<WithdrawalAmount {...props} />)} />

            {/* Select Account To Send Withdrawal */}
            <Route exact path="/withdraw/accounts" render={props => (<WithdrawalAccounts {...props} />)} />

            {/* Withdraw Success */}
            <Route path="/withdraw/success" render={props => (<SuccessPage {...props} type="withdrawalSuccess" />)} />


          {/* FUND WALLET ROUTES: */}
            {/* Enter Funding Amount */}
            <Route exact path="/funding" render={props => (<FundingAmount {...props} />)} />

            {/* Select Funding Method */}
            {/* Same options as Payment Methods; card, PayPal, etc. */}
            <Route path="/funding/methods" render={props => (<FundingMethods {...props} />)} />

            {/* Funding Success */}
            <Route path="/funding/success" render={props => (<SuccessPage {...props} type="fundingSuccess"/>)} />

          {/* Catch-All 404 Page */}
          <Route render={props => (<SelectAmount {...props} />)} />
        </Switch>
      </Router>
    </main>
  )
}

export default App;
