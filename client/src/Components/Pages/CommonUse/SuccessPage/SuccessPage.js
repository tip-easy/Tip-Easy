import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

export const SuccessPage = (props) => {
  switch(props.type) {
    case "tippingSuccess":
      return (
        <div>
          Tipping Success!
        </div>
      )
    case "withdrawalSuccess":
      return (
        <div>
          Withdrawing Success!
        </div>
      )
    case "fundingSuccess":
      return (
        <div>
          Funding Success!
        </div>
      )
    case "paymentMethod":
      return (
        <div>
          Funding Success!
        </div>
      )
    default:
      return (
        <Redirect to="/" />
      )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);
