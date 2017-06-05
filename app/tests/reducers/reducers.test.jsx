const expect = require('expect');
const reducers = require('reducers');
const df = require('deep-freeze-strict');

describe("Reducers", ()=>{
  describe("searchTextReducer", ()=>{
    it("Should set searchText", ()=>{
      var action = {
        type: "SET_SEARCH_TEXT",
        searchText: "dog"
      };
      var res = reducers.searchTextReducer(df(''), df(action));
      expect(res).toEqual(action.searchText);
    });
  });

  describe("showCompletedReducer", ()=>{
    it("should toggle showcompleted", ()=>{
      var action = {
        type: "TOGGLE_SHOW_COMPLETED"
      };
      var res = reducers.showCompletedReducer(df(false), df(action));
      expect(res).toEqual(true);
    });
  });

  describe("todosReducer", ()=>{
    it("should add a todo", ()=>{
      var action = {
        type: 'ADD_TODO',
        text: "Go for a drive"
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });

    it("should toggle a todo", ()=>{
      var todos = [{
        id: "123",
        text: "Complete me up",
        completed: true,
        createdAt: 123456,
        completedAt: 1234
      }];

      var action = {
        type: "TOGGLE_TODO",
        id: "123"
      };

      var res = reducers.todosReducer(df(todos), df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);

    });
  });
});
