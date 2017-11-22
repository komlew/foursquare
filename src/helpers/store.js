// @flow
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
import type { Middleware } from 'redux';

import sagas from '../sagas';
import reducers from '../reducers';

type MiddlewareFn = Middleware<*, *>;

export default () => {
  // Using saga middleware to handle async events and side effects
  const sagaMiddleware: MiddlewareFn = createSagaMiddleware();
  let middleware: Array<MiddlewareFn> = [sagaMiddleware];

  // Adding redux-logger to the list of middleware to use only in development
  if (process.env.NODE_ENV !== 'production') {
    const reduxLogger: MiddlewareFn = require('redux-logger').logger;
    middleware = [...middleware, reduxLogger];
  }

  // flow-disable-next-line
  const store = createStore(reducers, applyMiddleware(...middleware));
  sagaMiddleware.run(sagas);

  return store;
};
