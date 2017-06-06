const React = require('react');
const TodoAPI = require('TodoAPI');
import Todo from 'Todo';
var {connect} = require('react-redux');


export var TodoList = React.createClass({
render: function(){
  var {todos, searchText, showCompleted} = this.props;

  var renderTodos = () => {
    if (todos.length === 0) {
      return <p className="container__message">Nothing to do.</p>
    }

    return TodoAPI.filterTodos(todos, showCompleted, searchText).map((todo)=>{
      return(
        <Todo key={todo.id} {...todo} />
      );
    });
  };

  return (
    <div>
      {renderTodos()}
    </div>
  );
}

});

export default connect(
  (state)=>{
    return state;
  }
)(TodoList);
