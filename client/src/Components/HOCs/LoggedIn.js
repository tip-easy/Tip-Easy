import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const LoggedIn = WrappedComponent => {

  const HOCComponent = props => {
    if (props.user.accountType === "sender") {
      return <Redirect to="/" />;
    } else if (props.user.accountType === "receiver"){
      return <Redirect to="/user" />;
    } else {
      return <WrappedComponent {...props} />;
    }
  };

  const mapStateToProps = state => {
    return {
      user: state.UserReducer.user
    };
  };

  return connect(mapStateToProps)(HOCComponent);
};

export default LoggedIn;