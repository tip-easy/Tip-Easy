import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../../General/BackButton'

export const PaymentMethodDetails = () => {
  return (
    <div>
      <BackButton to="/payment-methods" />
      <h2>PaymentMethodDetails</h2>
      <p>After clicking 'Next', user will get taken to Stripe window to add details. If successful, the user will get taken to <Link to="/payment-methods/add/success">Success Page</Link></p>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethodDetails);
