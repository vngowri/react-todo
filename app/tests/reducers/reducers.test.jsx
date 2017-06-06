var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers', () => {
   describe('SearchTextReducer', () => {
      it('should set searchtext', () => {
         var action = {
             type: 'SET_SEARCH_TEXT',
             searchText: 'dog'
         };
        var res = reducers.searchTextReducer(df(''), df(action));
        expect(res).toEqual(action.searchText);          
      });
       
   });
    
    describe('showCompletedReducer', () => {
      it('should flip the current show completed', () => {
         var action = {
             type: 'TOGGLE_SHOW_COMPLETED',             
         };
        var res = reducers.showCompletedReducer(df(false), df(action));
        expect(res).toEqual(true);          
      });

    });
    
    describe('addTodoReducer', () => {
      it('should add a new todo', () => {
         var action = {
             type: 'ADD_TODO',             
             text: 'Completed packing'
         };
        var res = reducers.todosReducer(df([]), df(action));
        expect(res.length).toEqual(1);
        expect(res[0].text).toEqual(action.text);          
      });
        
    it('should toggle todo', ()=> {
       var todos = [{
        id: '123',
        text: 'Something',
        completed: true,
        createdAt: 123,
        completedAt: 126
       }];
        
        var action = {
            type: 'TOGGLE_TODO',
            id: '123'
        };
        
        var res = reducers.todosReducer(df(todos), df(action));
        expect(res[0].completed).toEqual(false);    
        expect(res[0].completedAt).toEqual(undefined);    
    });

    });    
    
});