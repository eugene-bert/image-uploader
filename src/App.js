import React from 'react';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router'
import {applyMiddleware, compose, createStore} from 'redux';
import { createBrowserHistory } from 'history'
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import {MainDecorator} from '@/decorators/MainDecorator';
import createRootReducer from './rootReducer';
import 'antd/dist/antd.css';

export const history = createBrowserHistory()

export const App = () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    createRootReducer(history),
    compose(
      applyMiddleware(
        routerMiddleware(history),
        sagaMiddleware,
        logger
      ),
    ),
  )
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
        <MainDecorator />
    </Provider>
  );
};
