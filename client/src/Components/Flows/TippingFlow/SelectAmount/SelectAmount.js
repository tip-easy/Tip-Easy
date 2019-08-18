import React, { useState } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import { setSelectedTipAmountTip } from '../../../../Actions/TipActions';

export const SelectAmount = (props) => {
  const [amount, setAmount] = useState(5)

  // Stretch goal: we can set user's currency in database and store it in Redux store

  const submitHandler = () => {
    props.setSelectedTipAmountTip(amount)
    props.history.push('/tip')
  }

  const currency = props.user.default_currency === 
    "btc" ? "₿" 
      : 
    props.user.default_currency;
  
  return (
    <>
      <div 
        className="upperRow"
        onClick={() => props.history.push('/welcome')}
      >
        Log In or Register
      </div>

      <div data-testid="selectAmount" className="selectAmount">
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
    setSelectedTipAmountTip
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectAmount);
