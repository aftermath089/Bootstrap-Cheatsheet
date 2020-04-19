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
        completed: true
      },
      {
        id: '14567',
        title: 'mow lawn',
        completed: false
      }
    ]
  }


  markComplete = () => {
    console.log(`from app.js`)
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
