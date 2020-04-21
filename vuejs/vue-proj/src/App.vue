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
      this.todos = [...this.todos,newData ]
    }
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo 1",
          completed: false
        },
        {
          id: 2,
          title: "todo 2",
          completed: false
        },
        {
          id: 3,
          title: "todo 3",
          completed: false
        }
      ]
    };
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
