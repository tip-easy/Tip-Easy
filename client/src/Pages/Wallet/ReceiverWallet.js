import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getBalance } from '../../Actions'

export const ReceiverWallet = (props) => {
  const {calculated_balance, currency} = props.BalanceReducer
  const {getBalance} = props



  useEffect(() => {
    const token = localStorage.getItem('tiptoken')
    // // Used to evaluate if the Login and nested GetUser have been successful and a user object has been returned from the back-end
    getBalance(token)
  }, [getBalance]);


  return (
    <div>
      <h2>Wallet</h2>
      <h3>Your Balance: {currency} {calculated_balance}</h3>

      <br/><Link to='/show-code'>Show Code</Link>
      <br/><Link to='/withdraw'>Make Withdrawal</Link>
      <br/><Link to='/tip/select-amount'>Send Tip</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
    BalanceReducer: state.BalanceReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBalance
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverWallet);
