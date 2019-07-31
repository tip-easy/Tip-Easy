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
import { LoginReducer } from './Reducers';

const rootReducer = combineReducers({
  LoginReducer
});

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk)
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
