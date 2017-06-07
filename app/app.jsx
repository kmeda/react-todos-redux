var React = require('react');
var ReactDOM = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import TodoApp from 'TodoApp';
var actions = require('actions');
var store = require('configureStore').configure();
var TodoAPI = require('TodoAPI');
import LoginPage from 'LoginPage';

store.dispatch(actions.startAddTodos());

// Load foundation
$(document).foundation();

// App css
require('style-loader!css-loader!sass-loader!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' >
        <IndexRoute component={LoginPage}/>
        <Route path='todos' component={TodoApp}/>
      </Route>
    </Router>

  </Provider>,
  document.getElementById('app')
);
