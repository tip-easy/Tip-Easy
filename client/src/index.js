import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import * as serviceWorker from './serviceWorker';

// Components
import App from './App';

// Store
import { store } from './Reducers/index';

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
