var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');
var expect = require('expect');
var $ = require('jQuery');

var AddTodos = require('AddTodos');

describe('AddTodos', ()=> {
   it('should exist', ()=> {
       expect(AddTodos).toExist();
   });    
    
    it('should call onAddTodo prop with valid data', ()=> { 
        var todoText = 'Check Mail';
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddTodos onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));
        
        addTodos.refs.todotext.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toHaveBeenCalledWith(todoText);
    });
    
    it('should not call onAddTodo prop when invalid input', ()=> { 
        var todoText = '';
        var spy = expect.createSpy();
        var addTodos = TestUtils.renderIntoDocument(<AddTodos onAddTodo={spy}/>);
        var $el = $(ReactDOM.findDOMNode(addTodos));
        
        addTodos.refs.todotext.value = todoText;
        TestUtils.Simulate.submit($el.find('form')[0]);
        
        expect(spy).toNotHaveBeenCalled();
    });
});