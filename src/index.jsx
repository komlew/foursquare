// @flow
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter, Switch, Route } from 'react-router-dom';

import createStore from './helpers/store';
import Overview from './containers/Overview';

const store = createStore();
const rootAppNode = document.getElementById('root');

if (rootAppNode) {
  ReactDOM.render(
    <Provider store={store}>
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Overview} />
        </Switch>
      </HashRouter>
    </Provider>,
    rootAppNode,
  );
}
// TODO: Error handling (missing 'root' DOM node)
