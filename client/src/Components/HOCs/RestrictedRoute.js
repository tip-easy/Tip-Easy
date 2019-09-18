import React from 'react';

import { connect } from 'react-redux'
import { Route, Redirect } from 'react-router';

export const AuthenticationRestrictedRoute = ({
  authOnly = false,
  component: Component,
  render: RenderedComponent, // Renaming render prop to avoid confusion + better readability.
  redirectTo,
  ...routeProps
}) => {
  const { token, user } = props.UserReducer;
  return (
    <Route
      // Passing along Route props (path, exact etc.) from invoked HOC to Route component
      {...routeProps}
      // Passing along props (history, location etc.) from Router to rendered component
      render={(props) => {      
        if (!token && (user.account_type === "sender" || user.account_type === "receiver")) {
          // Compatibility with both Route render prop or Route component prop
          if (RenderedComponent) {
            return <RenderedComponent {...props} />;
          }
          return <Component {...props} />
        }
        return <Redirect to="/welcome" />;
      }}
    />
  );
}


const mapStateToProps = (state) => {
  return {
    UserReducer: state.UserReducer
  }
}

export default connect(mapStateToProps, {})(PaymentMethodDetails);
