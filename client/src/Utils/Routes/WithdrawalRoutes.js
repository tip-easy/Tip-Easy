import React from 'react'

// Pages
import OverviewWithdrawalAccounts from '../../Pages/WithdrawTips/OverviewWithdrawalAccounts'
import SetWithdrawalAmount from '../../Pages/WithdrawTips/SetWithdrawalAmount';
import SuccessPage from '../../Components/General/SuccessPage';

import AuthenticationRestrictedRoute from '../../Components/HOCs/AuthenticationRestrictedRoute'

export const WithdrawalRoutes = () => {
  return (
    <>
      {/* WALLET WITHDRAWAL ROUTES: */}
        {/* Withdraw Tips */}
        <AuthenticationRestrictedRoute 
          exact
          path="/withdraw"
          render={props => (
            <SetWithdrawalAmount {...props} />
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
    </>
  )
}

export default WithdrawalRoutes;