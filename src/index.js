import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import {App} from './App';
import reducers from './rootReducer';
import 'antd/dist/antd.css';

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk, logger));

ReactDOM.render(
  <Provider store={store}>
        <App />
  </Provider>,
  document.getElementById('root'),
);
