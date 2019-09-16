import React from 'react';

import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

export const SuccessPage = (props) => {
  const { user } = props.UserReducer
  switch(props.type) {
    case "tippingSuccess":
      return (
        <div>
          Tipping Success!
          {
            user.account_type === "receiver" ?
              <Link to="/wallet">RECEIVER ONLY: Back to Wallet</Link>
            :
              <Link to="/tip/select-amount">SENDER ONLY: Back To Select Amount</Link>
          }
        </div>
      )
    case "withdrawalSuccess":
      return (
        <div>
          Withdrawing Success!
          <br/><Link to="/wallet">Back to Wallet</Link>
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
    UserReducer: state.UserReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({

  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SuccessPage);
