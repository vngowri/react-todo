var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var TodoSearch = require('TodoSearch');

describe('TodoSearch', ()=> {
   it('should exist', ()=> {
      expect(TodoSearch).toExist(); 
   });
    
    it('should call on search with entered input text', ()=> {
        var searchText = "dog";
        var spy = expect.createSpy();
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        
        todoSearch.refs.searchText.value=searchText;        
        TestUtils.Simulate.change(todoSearch.refs.searchText);
        
        expect(spy).toHaveBeenCalledWith(false, searchText);        
    });
    
    it('should call on search when the checkbox is clicked', ()=> {
        var showCompleted = true;
        var searchText = "";
        var spy = expect.createSpy();        
        var todoSearch = TestUtils.renderIntoDocument(<TodoSearch onSearch={spy}/>);
        
        todoSearch.refs.showCompleted.checked = showCompleted;
        TestUtils.Simulate.change(todoSearch.refs.showCompleted);
        
        expect(spy).toHaveBeenCalledWith(showCompleted, searchText);                        
    });
    
});