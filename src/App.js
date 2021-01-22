import React from 'react';
import Todos from './Todos';
import AddTodos from './addTodo';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, content: "Learn React"},
        {id: 2, content: "learn javascript"}
      ]
    };
  }
  deleteTodo = (id) =>{
    let newTodos = this.state.todos;
    this.setState({
      todos: newTodos.filter(todo => todo.id !== id)
    }
    );
  }
  addTodo = (todo) => {
    todo.id = Math.random();
    console.log(todo);
    let newTodosList = [...this.state.todos, todo];
    console.log(newTodosList);
    this.setState({
      todos: newTodosList
    });
  }

  render() {
    return (
      <div className="todo-app container">
      <h1 className="center blue-text"> Todo list</h1>
        <Todos todoList={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddTodos newTodosProps={this.addTodo} />
      </div>
    );
  }
}

export default App;
