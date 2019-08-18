import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store'

// import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

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
