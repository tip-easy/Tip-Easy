import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const FundingMethods = () => {
  return (
    <div>
      FundingMethods
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
