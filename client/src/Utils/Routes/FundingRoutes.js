import React from 'react'

// Pages
import FundingAmount from '../../Components/Flows/FundingFlow/FundingAmount/FundingAmount';
import FundingMethods from '../../Components/Flows/FundingFlow/FundingMethod/FundingMethods';
import SuccessPage from '../../Components/Pages/CommonUse/SuccessPage/SuccessPage';

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
    </>
  )
}

export default FundingRoutes;