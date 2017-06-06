import * as redux from 'redux';
import {searchTextReducer, showCompletedReducer, todosReducer} from 'reducers';
import thunk from 'redux-thunk';

export var configure = ()=>{

  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

};
