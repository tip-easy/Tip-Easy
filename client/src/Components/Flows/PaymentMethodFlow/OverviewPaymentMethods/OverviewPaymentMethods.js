import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const OverviewPaymentMethods = () => {
  return (
    <div>
      <h2>OverviewPaymentMethods</h2>
      
      <Link to="/user/settings">Back</Link>
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
