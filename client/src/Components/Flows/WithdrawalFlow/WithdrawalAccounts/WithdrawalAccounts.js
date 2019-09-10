import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const WithdrawalAccounts = () => {
  return (
    <div>
      WithdrawalAccounts
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

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalAccounts);
