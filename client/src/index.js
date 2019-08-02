import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
// import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

// Middlewares
import thunk from 'redux-thunk';

// Reducers
import { BalanceReducer,
  DepositReducer,
  LoginReducer,
  PaymentMethodReducer,
  RegistrationReducer,
  SelectTipReducer,
  TipReceiverReducer,
  TransactionReducer,
  UserReducer,
  WithdrawalReducer, } from './Reducers';

const rootReducer = combineReducers({
  BalanceReducer,
  DepositReducer,
  LoginReducer,
  PaymentMethodReducer,
  RegistrationReducer,
  SelectTipReducer,
  TipReceiverReducer,
  TransactionReducer,
  UserReducer,
  WithdrawalReducer,
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root')
);

// Hot Module Replacement
if (module.hot) {
  module.hot.accept()
};

// serviceWorker.unregister();
