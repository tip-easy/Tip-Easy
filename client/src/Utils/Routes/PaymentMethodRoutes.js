import React from 'react'

// Pages
import OverviewPaymentMethods from '../../Components/Flows/PaymentMethodFlow/OverviewPaymentMethods/OverviewPaymentMethods'
import SelectPaymentMethod from '../../Components/Flows/PaymentMethodFlow/SelectPaymentMethod/SelectPaymentMethod';
import PaymentMethodDetails from '../../Components/Flows/PaymentMethodFlow/PaymentMethodDetails/PaymentMethodDetails';
import SuccessPage from '../../Components/General/SuccessPage';

import AuthenticationRestrictedRoute from '../../Components/HOCs/AuthenticationRestrictedRoute'

export const PaymentMethodRoutes = () => {
  return (
    <>
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
            <PaymentMethodDetails {...props} />
          )}
        />

        {/* Add Payment Method Success */}
        <AuthenticationRestrictedRoute 
          path="/payment-methods/add/success"
          render={props => (
            <SuccessPage type="paymentMethod" {...props} />
          )}
        />
    </>
  )
}

export default PaymentMethodRoutes;