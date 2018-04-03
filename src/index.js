import React from 'react';
import { render } from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './containers/App';
import './style.css';

function isPromise(val) {
  return val && typeof val.then === 'function';
}
// Application's store
const configureStore = () => {
  const store = createStore(
    reducers,
    compose(
      applyMiddleware(function promiseMiddleware({ dispatch }) {
        return next => action => {
          return isPromise(action.payload)
            ? action.payload.then(
                result => dispatch({ ...action, payload: result }),
                error => {
                  dispatch({ ...action, payload: error, error: true });
                  return Promise.reject(error);
                }
              )
            : next(action);
        };
      }),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index');
      store.replaceReducer(nextRootReducer);
    });
  }
  return store;
};

const store = configureStore();
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
