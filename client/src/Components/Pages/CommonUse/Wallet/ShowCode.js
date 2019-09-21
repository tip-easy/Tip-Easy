import React from 'react';

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import BackButton from '../../../General/BackButton'

export const ShowCode = ({user}) => {
  // TO-DO: Add conditional logic that only renders Sender wallet in case the user is a sender
  //        When the user is a receiver, render the receiver wallet (which doubles as a sender wallet)
  return (
    <div>
      <BackButton to='/wallet' anchorText="Back to Wallet"/>
      <h2>{user.unique_code}</h2>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ShowCode);
