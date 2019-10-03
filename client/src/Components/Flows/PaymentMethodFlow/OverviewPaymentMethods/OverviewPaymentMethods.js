import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import BackButton from '../../../General/BackButton'

export const OverviewPaymentMethods = () => {
  return (
    <div>
      <h2>OverviewPaymentMethods</h2>
      
      <BackButton to="/user/settings" anchorText="Back to Settings" />
      <br/><Link to="/payment-methods/add">Add Payment Method</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(OverviewPaymentMethods);
