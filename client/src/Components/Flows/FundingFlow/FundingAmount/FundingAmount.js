import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const FundingAmount = () => {
  return (
    <div>
      <h2>FundingAmount</h2>
      <p>Similar to `SelectAmount`, user picks the funding amount, which is then stored in the store</p>
      <Link to="/funding/methods">Next</Link>
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

export default connect(mapStateToProps, mapDispatchToProps)(FundingAmount);
