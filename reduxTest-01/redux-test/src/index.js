import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import reducer from './reducers';

import test from './routes/test';
import testtest from './containers/testtest';

const store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={testtest} />
        <Route path="/test" component={test} />
      </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root'),
);

