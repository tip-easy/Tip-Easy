import React from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

// Styling
import "./App.scss";

// Components
import AuthenticationHeader from './Components/General/AuthenticationHeader'

import Auth from './Components/Flows/AuthenticationFlow/Auth';

import SelectAmount from './Components/Flows/TippingFlow/SelectAmount/SelectAmount';
import EnterReceiverCode from './Components/Flows/TippingFlow/EnterReceiverCode/EnterReceiverCode';
import SuccessPage from './Components/Pages/CommonUse/SuccessPage/SuccessPage';

import OverviewPaymentMethods from './Components/Flows/PaymentMethodFlow/OverviewPaymentMethods/OverviewPaymentMethods'
import SelectPaymentMethod from './Components/Flows/PaymentMethodFlow/SelectPaymentMethod/SelectPaymentMethod';
import PaymentMethodDetails from './Components/Flows/PaymentMethodFlow/PaymentMethodDetails/PaymentMethodDetails';

import UserProfile from './Components/Pages/Sender/UserProfile/UserProfile';
import UserSettings from './Components/Pages/CommonUse/UserSettings/UserSettings';
import UpdateUserSettings from './Components/Pages/CommonUse/UserSettings/UpdateUserSettings';
import Wallet from './Components/Pages/CommonUse/Wallet/Wallet';
import ShowCode from './Components/Pages/CommonUse/Wallet/ShowCode'

import OverviewWithdrawalAccounts from './Components/Flows/WithdrawalFlow/OverviewWithdrawalAccounts/OverviewWithdrawalAccounts'
import WithdrawalAmount from './Components/Flows/WithdrawalFlow/WithdrawalAmount/WithdrawalAmount';
import WithdrawalAccounts from './Components/Flows/WithdrawalFlow/WithdrawalAccounts/WithdrawalAccounts';

import FundingAmount from './Components/Flows/FundingFlow/FundingAmount/FundingAmount';
import FundingMethods from './Components/Flows/FundingFlow/FundingMethod/FundingMethods';

import { TestRouter } from './Utils/Routes/Routes'

const App = (props) =>  {
  return (
    <main>
      <Router>
        <AuthenticationHeader / >
        <Switch>
          {/* -- AUTHENTICATION --- */}
            {/* Login & Registration */}
            <Route path="/welcome" render={props => (<Auth {...props} />)} />

            <TestRouter/>

          {/* --- TIPPING FLOW --- */}
            {/* DEFAULT: Select Tipping Amount */}
            <Route path="/tip/select-amount" exact render={props => (<SelectAmount {...props} />)} />

            {/* Enter Tip Receiver Code */}
            <Route path="/tip/select-receiver" render={props => (<EnterReceiverCode {...props} />)} />

            {/* Tipping Success Page */}
            <Route path="/tip/success" render={props => (<SuccessPage {...props} type="tippingSuccess" />)} />


          {/* --- PAYMENT METHOD FLOW --- */}
            {/* Payment Methods Overview */}
            <Route exact path="/payment-methods" render={props => (<OverviewPaymentMethods {...props} />)} />
          
            {/* Select Payment Method */}
            <Route path="/payment-methods/select" render={props => (<SelectPaymentMethod {...props} />)} />

            {/* Enter Payment Method Details */} 
            {/* Add Payment Method; includes CC number, name, etc. */}
            <Route exact path="/payment-methods/add" render={props => (<PaymentMethodDetails {...props} />)} />
          
            {/* Add Payment Method Success */}
            <Route path="/payment-methods/add/success" render={props => (<SuccessPage {...props} type="paymentMethod" />)} />


          {/* --- USER-RELATED ROUTES --- */}
            {/* Wallet */}
            {/* Both Sender && Receiver */}
            <Route path="/wallet" render={props => (<Wallet {...props} />)} />

            {/* User Profile */}
            {/* Contains Receiver Code - if applicable */}
            <Route exact path="/user" render={props => (<UserProfile {...props} />)} />

            {/* User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <Route exact path="/user/settings" render={props => (<UserSettings {...props} />)} />

            {/* Change User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <Route path="/user/settings/update" render={props => (<UpdateUserSettings {...props} />)} />

            {/* Show Receiver Code */}
            {/* >>> OPTIONAL. RECEIVER-ONLY. Might decide to show the receiver code on Wallet */}
            <Route path="/show-code" render={props => (<ShowCode {...props} />)} />


          {/* WALLET WITHDRAWAL ROUTES: */}
            {/* Withdraw Tips */}
            {/* Entered from Receiver Wallet */}
            <Route exact path="/withdraw" render={props => (<WithdrawalAmount {...props} />)} />

            {/* Payment Methods Overview */}
            <Route exact path="/withdraw/accounts" render={props => (<OverviewWithdrawalAccounts {...props} />)} />

            {/* Select Account To Send Withdrawal */}
            <Route exact path="/withdraw/accounts/select" render={props => (<WithdrawalAccounts {...props} />)} />

            {/* Adding Withdraw Method Success */}
            <Route path="/withdraw/accounts/success" render={props => (<SuccessPage {...props} type="withdrawAccount" />)} />

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

          {/* Catch-All 404 Page. If not authorized, will return the user to `Auth`. If authenticated, it'll return to `Wallet` (in the case of a receiver) or `SelectAmount` (for senders) */}
          <Route render={props => (<Redirect replace to='/welcome' />)} />
        </Switch>
      </Router>
    </main>
  )
}

export default App;
