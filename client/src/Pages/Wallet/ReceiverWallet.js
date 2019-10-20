import React, { useEffect } from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';

import { getBalance, fetchTransactions } from '../../Actions'

export const ReceiverWallet = (props) => {
  const {calculated_balance, currency} = props.BalanceReducer
  const {getBalance, fetchTransactions} = props

  const transactionsArray = props.transactionsArray || []

  // ComponentDidMount
  useEffect(() => {
    const token = localStorage.getItem('tiptoken')
    // // Used to evaluate if the Login and nested GetUser have been successful and a user object has been returned from the back-end
    getBalance(token)
    fetchTransactions(token)
  }, [getBalance, fetchTransactions]);

  let currency_sign = "€"

  if (currency === "usd") {
    currency_sign = "$"
  }

  return (
    <div>
      <h2>Wallet</h2>
      <h3 className="balance">
        Your Balance: 
        {/* With future implementation of multiple currency types, separate logic will have to be implemented */}
        {currency_sign} {calculated_balance}
      </h3>

      <h3 className="receiverCode">
        Your Receival Code: <br/>
        {props.user.unique_code}
      </h3>

      <div className="transactionsOverview">
        <h3>Previous Transactions</h3>
        <div>
          {[].map((item) => {
            return (
              <div className="transactionCard">
                <h4>
                  {/* Received $XX from YYYYYYYY */}
                  {item.transaction_type} {currency_sign} {item.amount} from {item.sender.name}</h4>
              </div>
            )
          })}
        </div>


      </div>





      <br/><Link to='/withdraw'>Make Withdrawal</Link>
      <br/><Link to='/tip/select-amount'>Send Tip</Link>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
    BalanceReducer: state.BalanceReducer,
    transactionsArray: state.TransactionReducer.transactionsArray
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getBalance,
    fetchTransactions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ReceiverWallet);
