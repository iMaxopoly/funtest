import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import rootReducer from './store/reducers';

import App from './components/App';

import '../public/index.html';
import musicplayerSagaWatcher from './store/sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(musicplayerSagaWatcher);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" exact component={App}/>
    </BrowserRouter>
  </Provider>
  , document.querySelector('#root')
);
