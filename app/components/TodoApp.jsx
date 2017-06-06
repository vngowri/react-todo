    var React = require('react');
    var TodoSearch = require('TodoSearch');
    var TodoList = require('TodoList');
    var AddTodos = require('AddTodos');

    var TodoApp = React.createClass({
        getInitialState: function () {
            return {
                showCompleted: false,
                searchText: '',
              todos: [{
                  id: 1,
                  text: 'Walk the dog'
              }, {
                  id: 2,
                  text: 'Clean the yard'
              }, {
                  id: 3,
                  text: 'Finish Laundry'                  
              }, {
                  id: 4,
                  text: 'Run Errands'                  
              }, {
                  id: 5,
                  text: 'Get haircut'              
              }]  
            };
        },
    
        handleAddTodo: function(todoText) {
            alert('new todo: ' + todoText);
            var newTodo = {
                id: this.state.todos.length+1,
                text: todoText
            };
            this.state.todos.push(newTodo);
            this.setState({todos:this.state.todos});             
        },
        
        handleTodoSearch: function(showCompleted, searchText) {
            this.setState({
                showCompleted: showCompleted,
                searchText: searchText.toLowerCase()
            });
            
        },
        
      render: function () {        
        var {todos} = this.state;
        return (
            <div>
                <TodoSearch onSearch={this.handleTodoSearch}/>
                <TodoList todos={todos}/>
                <AddTodos onAddTodo={this.handleAddTodo}/>
            </div>
        )
      }

    });

    module.exports = TodoApp;
