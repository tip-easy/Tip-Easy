import React from 'react'
import { Route, Redirect } from 'react-router-dom';

// Separate Components
import Auth from '../../Pages/Auth/Auth';

// Route Objects
import FundingRoutes from './FundingRoutes';
import TippingRoutes from './TippingRoutes';
import UserRoutes from './UserRoutes';
import WithdrawalRoutes from './WithdrawalRoutes';

export const RouterObject = () => {
  return (
    <>
      {/* -- AUTHENTICATION --- */}
        {/* Login & Registration */}
        <Route exact path="/" render={props => (<Auth {...props} />)} />
        <Route path="/welcome" render={props => (<Auth {...props} />)} />
      
      {/* FUND WALLET ROUTES: */}
        <FundingRoutes />

      {/* --- USER-RELATED ROUTES --- */}
        <UserRoutes />

      {/* --- TIPPING FLOW --- */}
        <TippingRoutes />


      {/* WALLET WITHDRAWAL ROUTES: */}
        <WithdrawalRoutes/>


      {/* Catch-All 404 Page. If not authorized, will return the user to `Auth`. If authenticated, it'll return to `Wallet` (in the case of a receiver) or `SelectAmount` (for senders) */}
      <Route render={props => (<Redirect replace {...props} to='/' />)} />
    </>
  )
}

export default RouterObject;