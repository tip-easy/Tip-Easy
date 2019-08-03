import React, { Component } from 'react';
import { connect} from 'react-redux'

import { bindActionCreators } from 'redux';

// Actions
import { Login } from './../../../Actions/LoginActions'

export class LoginPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      
    }
  }

  submitHandler = (event) => {
    event.preventDefault()
    this.props.Login();
  }

  render() {
    console.log(this.props)
    return (
      <form onSubmit={(event) => this.submitHandler(event)}>
        <input 
          type="text" 
          placeholder="Email" />
        <input 
          type="password" 
          placeholder="Password" />
          
        <button onClick={(event) => this.submitHandler(event)}>
          Log In
        </button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return {

  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    Login
  }, dispatch);
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(LoginPage);
