import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const PaymentMethod = (props) => {
  const clickHandler = () => {
    props.history.push('/details')
  }

  return (
    <>
      <div className="upperDiv" />

      <div>
        <h2>Select a Payment Method</h2>
        <div className="optionContainer">
          <button className="option" disabled={false} onClick={() => clickHandler()} >
            Card
          </button>

          <button className="option" disabled={false} onClick={() => clickHandler()} >
            ApplePay
          </button>

          <button className="option" disabled={true} onClick={() => clickHandler()} >
            PayPal
          </button>

          <button className="option" disabled={true} onClick={() => clickHandler()} >
            BTC Lightning
          </button>
        </div>
      </div>
    </>
  )
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);
