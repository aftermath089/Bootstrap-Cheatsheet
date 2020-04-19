import React, {Component} from 'react';
import './App.css';
import Todos from './components/Todos';

class App extends Component {
  state = {
    todos :  [
      {
        id : '1233',
        title : 'sharpen skills',
        completed : 'false'
      },
      {
        id : '245',
        title : 'feed dog',
        completed : 'false'
      },
      {
        id : '14567',
        title : 'mow lawn',
        completed : 'false'
      }
    ]
  }

  render(){
    return (
      <div className="App">
        <h1>Todo App</h1>
        <Todos todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
