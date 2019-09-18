import React from 'react'

// Pages
import SelectAmount from '../../Components/Flows/TippingFlow/SelectAmount/SelectAmount';
import EnterReceiverCode from '../../Components/Flows/TippingFlow/EnterReceiverCode/EnterReceiverCode';
import SuccessPage from '../../Components/Pages/CommonUse/SuccessPage/SuccessPage';

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