import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';


import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import reducer from './reducers';

import testRedux from './routes/testRedux';
import test from './routes/test';
import testtest from './routes/testtest';
import App from './containers/testtest';


const store = createStore(reducer);
ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRoute component={test} />
        <Route path="/testRedux" component={testRedux} />
        <Route path="/app" component={App} />
         </Route>
    </Router>
  </Provider>
  ),
  document.getElementById('root'),
);
