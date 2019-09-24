import React from 'react'

// Pages
import SelectAmount from '../../Pages/SendTips/SelectAmount';
import EnterReceiverCode from '../../Pages/SendTips/EnterReceiverCode';
import SuccessPage from '../../Components/General/SuccessPage';

import AuthenticationRestrictedRoute from '../../Components/HOCs/AuthenticationRestrictedRoute'

export const TippingRoutes = () => {
  return (
    <>
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
    </>
  )
}

export default TippingRoutes;