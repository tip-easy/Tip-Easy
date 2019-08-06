import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { fetchPaymentMethods, selectPaymentMethod } from './../../../../Actions/PaymentMethodActions';

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

export const PaymentMethod = (props) => {
  const clickHandler = (methodName) => {
    props.selectPaymentMethod(methodName)
    props.history.push('/details')
  }

  useEffect(() => {
    props.fetchPaymentMethods()
  })

  const checkPaymentMethodType = (type) => {
    let found = false;
    props.paymentMethodsArray.forEach((method) => {
      if (method.pay_method_type === type) {
        return found = true
      } else {
        return null
      }
    })
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
              onClick={() => clickHandler(option.paymentMethodType)} >
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
    selectPaymentMethod,
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);
