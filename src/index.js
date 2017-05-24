import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, hashHistory } from 'react-router';
import { Provider } from 'react-redux';
import { compose, createStore, combineReducers } from 'redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import ApplicationContainer from './containers/application';
import reducers from './reducers';

// eslint-disable-next-line no-unused-vars
import Style from './stylesheets/main.scss';

const el = document.getElementById('app');
const store = createStore(combineReducers({ ...reducers, routing: routerReducer }), compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
));
const history = syncHistoryWithStore(hashHistory, store);

const routes = (
  <Provider store={store}>
    <Router history={history}>
      <Route component={ApplicationContainer}>
        <Route
          name='dashboard'
          component={() => console.log('logged in')}
          path='/'
        />
      </Route>
    </Router>
  </Provider>
);

export default ReactDOM.render(routes, el);
