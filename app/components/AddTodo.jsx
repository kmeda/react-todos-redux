const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export var AddTodo = React.createClass({

handleSubmit: function(e){
  e.preventDefault();

  var {dispatch} = this.props;
  var todotext = this.refs.todotext.value;

  if (todotext.length > 0) {
    this.refs.todotext.value = '';
    dispatch(actions.startAddTodo(todotext));
  } else {
    this.refs.todotext.focus();
  }
},

render: function(){
  return (
    <div className="container__footer">
      <form onSubmit={this.handleSubmit}>

        <input ref="todotext" type="text" placeholder="What would you like to do?" />
        <button className="button expanded">Add Todo</button>
      </form>
    </div>
  );
}

});

export default connect()(AddTodo);
