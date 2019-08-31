import React, { useState } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { setSelectedTipAmount } from '../../../../Actions';
import { fetchPaymentMethods, addPaymentMethod, removePaymentMethod, clearPaymentMethodsFromStore } from '../../../../Actions';

const SelectAmount = (props) => {
  
  const [amount, setAmount] = useState(5)

  const submitHandler = () => {
    props.setSelectedTipAmount(amount)
    props.history.push('/tip')
  }

  let currency = "$"
  switch (props.user.default_currency) {
    case "eur":
      currency = "€"
      break;
    case "btc":
      currency= "₿"
      break;
    default:
      currency = "$"
      break;
  }

  return (
    <>
      <div 
        className="upperRow"
        onClick={() => {
          props.removePaymentMethod("111-222-333-444","token")
          
          // props.history.push('/welcome')
        }}
      >
        Log In or Register
      </div>

      <div className="selectAmount">
        <h2>SelectAmount</h2>
        {currency}<input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}/>
        <button
          onClick={() => submitHandler()}
        >
          Next
        </button>
      </div>

      <div className="buttonRow">
        {/* TO-DO: Generate these buttons through map */}
        <button
          onClick={() => setAmount(5)}
        >
          {currency} 5
        </button>

        <button
          onClick={() => setAmount(10)}
        >
          {currency} 10
        </button>

        <button
          onClick={() => setAmount(15)}
        >
          {currency} 15
        </button>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    setSelectedTipAmount,
    fetchPaymentMethods, addPaymentMethod, removePaymentMethod, clearPaymentMethodsFromStore
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmount);
