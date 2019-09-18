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
import AuthenticationRestrictedRoute from './Components/HOCs/AuthenticationRestrictedRoute'

const App = (props) =>  {
  return (
    <main>
      <Router>
        <AuthenticationHeader / >
        <Switch>
          {/* -- AUTHENTICATION --- */}
            {/* Login & Registration */}
            <Route path="/welcome" render={props => (<Auth {...props} />)} />


          {/* --- TIPPING FLOW --- */}
            {/* DEFAULT: Select Tipping Amount */}
            <AuthenticationRestrictedRoute 
              exact 
              path="/tip/select-amount"
              render={props => (
                <SelectAmount {...props} />
              )}
            />

            {/* Enter Tip Receiver Code */}
            <AuthenticationRestrictedRoute 
              path="/tip/select-receiver"
              render={props => (
                <EnterReceiverCode {...props} />
              )}
            />

            {/* Tipping Success Page */}
            <AuthenticationRestrictedRoute  
              path="/tip/success"
              render={props => (
                <SuccessPage type="tippingSuccess" {...props} />
              )}
            />


          {/* --- PAYMENT METHOD FLOW --- */}
            {/* Payment Methods Overview */}
            <AuthenticationRestrictedRoute 
              exact 
              path="/payment-methods"
              render={props => (
                <OverviewPaymentMethods {...props} />
              )}
            />
            
            {/* Select Payment Method */}
            <AuthenticationRestrictedRoute 
              exact 
              path="/payment-methods/select"
              render={props => (
                <SelectPaymentMethod {...props} />
              )}
            />


            {/* Enter Payment Method Details */} 
            {/* Add Payment Method; includes CC number, name, etc. */}
            <AuthenticationRestrictedRoute 
              exact 
              path="/payment-methods/add"
              render={props => (
                <SelectPaymentMethod {...props} />
              )}
            />

            {/* Add Payment Method Success */}
            <AuthenticationRestrictedRoute 
              path="/payment-methods/add/success"
              render={props => (
                <SuccessPage type="paymentMethod" {...props} />
              )}
            />


          {/* --- USER-RELATED ROUTES --- */}
            {/* Wallet */}
            {/* Both Sender && Receiver */}
            <AuthenticationRestrictedRoute 
              path="/wallet"
              render={props => (
                <Wallet {...props} />
              )}
            />

            {/* User Profile */}
            {/* Contains Receiver Code - if applicable */}
            <AuthenticationRestrictedRoute 
              exact
              path="/user"
              render={props => (
                <UserProfile {...props} />
              )}
            />

            {/* User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <AuthenticationRestrictedRoute 
              exact
              path="/user/settings"
              render={props => (
                <UserSettings {...props} />
              )}
            />

            {/* Change User Settings */}
            {/* Contains Change Password, Delete Account, etc. */}
            <Route path="/user/settings/update" render={props => (<UpdateUserSettings {...props} />)} />
            <AuthenticationRestrictedRoute 
              path="/user/settings/update"
              render={props => (
                <UpdateUserSettings {...props} />
              )}
            />

            {/* Show Receiver Code */}
            {/* >>> OPTIONAL. RECEIVER-ONLY. Might decide to show the receiver code on Wallet */}
            <Route path="/show-code" render={props => (<ShowCode {...props} />)} />
            <AuthenticationRestrictedRoute 
              path="/show-code"
              render={props => (
                <ShowCode {...props} />
              )}
            />


          {/* WALLET WITHDRAWAL ROUTES: */}
            {/* Withdraw Tips */}
            <AuthenticationRestrictedRoute 
              exact
              path="/withdraw"
              render={props => (
                <WithdrawalAmount {...props} />
              )}
            />

            {/* Payment Methods Overview */}
            <AuthenticationRestrictedRoute 
              exact
              path="/withdraw/accounts"
              render={props => (
                <OverviewWithdrawalAccounts {...props} />
              )}
            />

            {/* Select Account To Send Withdrawal */}
            <AuthenticationRestrictedRoute 
              path="/withdraw/accounts/select"
              render={props => (
                <WithdrawalAccounts {...props} />
              )}
            />

            {/* Adding Withdraw Method Success */}
            <AuthenticationRestrictedRoute 
              path="/withdraw/accounts/success"
              render={props => (
                <SuccessPage type="withdrawAccount" {...props} />
              )}
            />

            {/* Withdraw Success */}
            <AuthenticationRestrictedRoute 
              path="/withdraw/success"
              render={props => (
                <SuccessPage type="withdrawalSuccess" {...props} />
              )}
            />


          {/* FUND WALLET ROUTES: */}
            {/* Enter Funding Amount */}
            <Route exact path="/funding" render={props => (<FundingAmount {...props} />)} />
            <AuthenticationRestrictedRoute 
              path="/withdraw/accounts/select"
              render={props => (
                <WithdrawalAccounts {...props} />
              )}
            />

            {/* Select Funding Method */}
            {/* Same options as Payment Methods; card, PayPal, etc. */}
            <AuthenticationRestrictedRoute 
              path="/funding/methods"
              render={props => (
                <FundingMethods {...props} />
              )}
            />

            {/* Funding Success */}
            <AuthenticationRestrictedRoute 
              path="/funding/success"
              render={props => (
                <SuccessPage type="fundingSuccess" {...props} />
              )}
            />

          {/* Catch-All 404 Page. If not authorized, will return the user to `Auth`. If authenticated, it'll return to `Wallet` (in the case of a receiver) or `SelectAmount` (for senders) */}
          <Route render={props => (<Redirect replace {...props} to='/welcome' />)} />
        </Switch>
      </Router>
    </main>
  )
}

export default App;
