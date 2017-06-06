var React = require('react');

var AddTodos = React.createClass( {
    onSubmit: function(e) {
        e.preventDefault();
        var todoText = this.refs.todotext.value;
        
        if ( todoText )
        {
            this.refs.todotext.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todotext.focus();
        }
    },
   render: function() {
       return ( <div>
           <form ref="form" className="addTodoForm" onSubmit={this.onSubmit}>
                <input ref="todotext" placeHolder="Enter todo item"/>
                <button className="button expanded">Add Todo</button>               
           </form>
       </div>
    );
   }    
});

module.exports = AddTodos;