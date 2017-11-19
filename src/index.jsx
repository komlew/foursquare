// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import type { Middleware } from 'redux';

import allReducers from './reducers';

type MiddlewareFn = Middleware<*, *>;

let middleware: Array<MiddlewareFn> = [];

if (process.env.NODE_ENV !== 'production') {
  // to use redux-logger only for development
  const reduxLogger: MiddlewareFn = require('redux-logger').logger;
  middleware = [...middleware, reduxLogger];
}

const store = createStore(allReducers, applyMiddleware(...middleware));

const root = document.getElementById('root');
if (root) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" />
          <Route path="/detail/" />
        </Switch>
      </HashRouter>
    </Provider>,
    root,
  );
}
