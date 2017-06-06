const React = require('react');
const {connect} = require('react-redux');
const actions = require('actions');

export var TodoSearch = React.createClass({

render: function(){

  var {searchText, showCompleted, dispatch} = this.props;
  return (
    <div className="container__header">
      <div>
        <input type="search" ref="searchText" placeholder="Search Todos" value={searchText}
          onChange={ ()=>{
            var searchText = this.refs.searchText.value;
            dispatch(actions.setSearchText(searchText));
            }}/>
        </div>
      <div className="align-elem">
        <label>
          <input type="checkbox" ref="showCompleted" checked={showCompleted}
            onChange={
              ()=>{
                  dispatch(actions.toggleShowCompleted());
              }}/>
          Show Completed Todo's
          </label>
      </div>
    </div>
  );
}
});

export default connect(
  (state)=>{
    return {
      showCompleted: state.showCompleted,
      searchText: state.searchText
    };
  }
)(TodoSearch);
