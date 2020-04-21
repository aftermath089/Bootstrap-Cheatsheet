<template>
  <div id="app">
    <Header/> 
    <AddTodo v-on:add-todo= "addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "./components/Todos";
import Header from "./components/layout/Header"
import AddTodo from "./components/AddTodo"
import axios from "axios"

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  methods:{
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id)
    },

    addTodo(newData){
      const {title, completed} = newData

      axios.post("https://jsonplaceholder.typicode.com/todos", {title: title, completed:completed})
      .then(res => this.todos = [...this.todos, res.data])
      .catch(error => console.log(error))
    }
  },
  data() {
    return {
      todos: [
      
      ]
    };
  },
  created(){
    axios.get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    .then(res => this.todos = res.data)
    .catch(err => console.log(err))
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.btn{
  display: inline-block;
  border: none;
  color: white;
  background: cornflowerblue;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover{
  background: #2c3e50;
}
</style>
