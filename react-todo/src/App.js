import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos: [
      {
        id: '1233',
        title: 'sharpen skills',
        completed: false
      },
      {
        id: '245',
        title: 'feed dog',
        completed: false
      },
      {
        id: '14567',
        title: 'mow lawn',
        completed: false
      }
    ]
  }


  markComplete = (id) => { // id is binded in TodoItem
    this.setState({
      todos: this.state.todos.map(todo =>{
        if(todo.id === id){
          todo.completed = !todo.completed // toggle
        }

        return todo
      })
    })
  }
  render() {
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}

export default App;
