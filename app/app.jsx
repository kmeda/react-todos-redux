import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from ('react-redux');
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoAPI from 'TodoAPI';

import TodoApp from 'TodoApp';
import actions from 'actions';

var store = require('configureStore').configure();


store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app')
);
