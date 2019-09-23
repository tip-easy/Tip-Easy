import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../../General/BackButton'

export const FundingMethods = () => {
  return (
    <div>
      <BackButton to="/funding" />
      <h2>FundingMethods</h2>
      <p>See a number of funding methods, such as via Card or Paypal, which can be clicked</p>
      <p>When one of the methods is clicked, the user will go to a page to confirm the payment (as part of Stripe) and then go to <Link to="/funding/success">The success page</Link></p>
      <p>There's a absolutely-positioned button at the bottom of the page: <Link to="/">Add New Method</Link> This will then open up a Stripe modal, after which the user will also be brought to the success page</p>
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

export default connect(mapStateToProps, mapDispatchToProps)(FundingMethods);
