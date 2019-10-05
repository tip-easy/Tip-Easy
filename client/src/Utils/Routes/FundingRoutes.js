import React from 'react'

// Pages
import FundingAmount from '../../Pages/FundWallet/FundingAmount';
import OverviewFundingAccounts from '../../Pages/FundWallet/OverviewFundingAccounts';
import SelectFundingMethods from '../../Pages/FundWallet/FundingMethods';
import SuccessPage from '../../Components/General/SuccessPage';

import AuthenticationRestrictedRoute from '../../Components/HOCs/AuthenticationRestrictedRoute'

export const FundingRoutes = () => {
  return (
    <>
      {/* FUND WALLET ROUTES: */}
        {/* Enter Funding Amount */}
        <AuthenticationRestrictedRoute 
          exact
          path="/funding"
          render={props => (
            <FundingAmount {...props} />
          )}
        />

        {/* Ovierview Funding Accounts */}
        <AuthenticationRestrictedRoute 
          path="/funding/accounts"
          render={props => (
            <OverviewFundingAccounts {...props} />
          )}
        />

        {/* Select Funding Method */}
        {/* Same options as Payment Methods; card, PayPal, etc. */}
        <AuthenticationRestrictedRoute 
          path="/funding/select-account"
          render={props => (
            <SelectFundingMethods {...props} />
          )}
        />

        {/* Funding Success */}
        <AuthenticationRestrictedRoute 
          path="/funding/success"
          render={props => (
            <SuccessPage type="fundingSuccess" {...props} />
          )}
        />
    </>
  )
}

export default FundingRoutes;