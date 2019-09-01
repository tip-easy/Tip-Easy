import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchPaymentMethods } from '../../../../Actions/PaymentMethodActions';
import { setSelectedPaymentMethod } from '../../../../Actions/TipActions';

// Array with all possible payment methods we carry, used for rendering corresponding buttons
const paymentMethodOptions = [
  {
    paymentMethodType: "card",
    paymentMethodName: "Card"
  },
  {
    paymentMethodType: "applepay",
    paymentMethodName: "ApplePay"
  },
  {
    paymentMethodType: "paypal",
    paymentMethodName: "PayPal"
  },
  {
    paymentMethodType: "btclightning",
    paymentMethodName: "BTC Lightning"
  }
]

export const SelectPaymentMethod = (props) => {
  // Sets selected payment method, containing both the type and name. 
  // Name has capitalization, meant for display. Type follows the schema set out by the DB
  const clickHandler = (paymentMethodObject) => {
    props.setSelectedPaymentMethod(paymentMethodObject)
    props.history.push('/details')
  }

  // on componentDidMount, fetch all payment methods associated with the (logged in) user
  // TODO: if no payment methods are found for the given user in store, enable all of them
  //       whereupon the user gets taken to the paymentDetails page to set up the chosen option.
  useEffect(() => {
    props.fetchPaymentMethods()
  })

  // Checks user's payment options in store. If found, it will enabled the corresponding button. Else, it'll be disabled.
  const checkPaymentMethodType = (type) => {
    let found = false;
    props.paymentMethodsArray.forEach((method) => {
      if (method.pay_method_type === type) {
        return found = true
      } else {
        return null
      }
    })
    // Use the NOT in order to correspond to the way `disabled` works. `disabled=true` is the opposite of what we want.
    return !found;
  }

  return (
    <>
      <div className="upperDiv" />

      <div>
        <h2>Select a Payment Method</h2>
        <div className="optionContainer">
          {paymentMethodOptions.map((option, idx) =>
            <button 
              key={idx}
              className="option" 
              disabled={checkPaymentMethodType(option.paymentMethodType)} 
              onClick={() => clickHandler({
                pay_method_type: option.paymentMethodType,
                pay_method_name: option.paymentMethodName,
            })} >
              {option.paymentMethodName}
            </button>
          )}
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    paymentMethodsArray: state.PaymentMethodReducer.paymentMethodsArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    fetchPaymentMethods,
    setSelectedPaymentMethod,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectPaymentMethod);
