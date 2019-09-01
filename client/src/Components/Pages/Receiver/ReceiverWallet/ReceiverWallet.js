import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const ReceiverWallet = () => {
  return (
    <div>
      ReceiverWallet
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

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverWallet);
