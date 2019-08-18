import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

// Middlewares
import thunk from 'redux-thunk';

// Reducers
import { BalanceReducer,
  DepositReducer,
  LoginReducer,
  PaymentMethodReducer,
  RegistrationReducer,
  TipReducer,
  TipReceiverReducer,
  TransactionReducer,
  UserReducer,
  WithdrawalReducer, 
} from './Reducers';

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
  rootReducer,
  compose(
    applyMiddleware(thunk),
  )
);

export default store;