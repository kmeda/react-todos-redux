const React = require('react');
const ReactDOM = require('react-dom');
const TestUtils = require('react-addons-test-utils');
const expect = require('expect');
const $ = require('jQuery');


const TodoList = require('TodoList');
const Todo = require('Todo');

describe("TodoList", ()=>{

it("should exist", ()=>{
  expect(TodoList).toExist();
});

it("should render one Todo component for each todo item", ()=>{
  var todos = [{
    id: 1,
    text: "Do Something"
  },
  {
    id: 2,
    text: "Check mail"
  }];

  var todoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
  var todosComponents = TestUtils.scryRenderedComponentsWithType(todoList, Todo);

  expect(todosComponents.length).toBe(todos.length);
  
});

});
