import React from 'react';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';

import TodoApp from 'TodoApp';
import LoginPage from 'LoginPage';
import firebase from 'app/firebase/';



var requireLogin = (nextState, replace, next) => {
  if (!firebase.auth().currentUser) {
    replace('/');
  }
  next();
};

var redirectIfLoggedin = (nextState, replace, next) => {
  if (firebase.auth().currentUser) {
    replace('/todos');
  }
  next();
};

export default (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={LoginPage} onEnter={redirectIfLoggedin}/>
      <Route path='todos' component={TodoApp} onEnter={requireLogin}/>
    </Route>
  </Router>
);
