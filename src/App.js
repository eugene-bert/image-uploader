import React from 'react';
import {Provider} from 'react-redux';
import 'antd/dist/antd.css';
import createSagaMiddleware from 'redux-saga';
import {applyMiddleware, createStore} from 'redux';
import reducers from './rootReducer';
import logger from 'redux-logger';
import rootSaga from './rootSaga';
import {MainDecorator} from './decorators/MainDecorator/MainDecorator';
import {BrowserRouter as Router} from 'react-router-dom';

export const App = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware, logger));
  sagaMiddleware.run(rootSaga);

  return (
    <Provider store={store}>
      <Router>
        <MainDecorator />
      </Router>
    </Provider>
  );
};
