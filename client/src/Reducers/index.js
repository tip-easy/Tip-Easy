import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// Middlewares
import thunk from 'redux-thunk';

import { BalanceReducer } from './BalanceReducer';
import { DepositReducer } from './DepositReducer';
import { LoginReducer } from './LoginReducer';
import { PaymentMethodReducer } from './PaymentMethodReducer';
import { RegistrationReducer } from './RegistrationReducer';
import { TipReducer } from './TipReducer';
import { TipReceiverReducer } from './TipReceiverReducer';
import { TransactionReducer } from './TransactionReducer';
import { UserReducer } from './UserReducer';
import { WithdrawalReducer } from './WithdrawalReducer';

const rootReducer = combineReducers({
  BalanceReducer,
  DepositReducer,
  LoginReducer,
  PaymentMethodReducer,
  RegistrationReducer,
  TipReducer,
  TipReceiverReducer,
  TransactionReducer,
  UserReducer,
  WithdrawalReducer,
});

export const store = createStore(
  rootReducer, {},
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
