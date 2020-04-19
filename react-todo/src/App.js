import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid/v4';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'sharpen skills',
        completed: false
      },
      {
        id:  uuid(),
        title: 'feed dog',
        completed: false
      },
      {
        id:  uuid(),
        title: 'mow lawn',
        completed: false
      }
    ]
  }


  markComplete = (id) => { // id is binded in TodoItem
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed // toggle
        }

        return todo
      })
    })
  }

  deleteTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    })
  }

  addTodo = (title) => {
    const newTodo = {
      id :  uuid(),
      title : title,
      completed : false
    }

    this.setState({
      todos : [...this.state.todos, newTodo]
    })
  }

  render() {
    return (
      <div className="App">
        <div className='container'>
          <Header />
          <AddTodo addTodo = {this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete} deleteTodo={this.deleteTodo} />
        </div>
      </div>
    );
  }
}

export default App;
