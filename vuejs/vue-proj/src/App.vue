<template>
  <div id="app">
    <Todos v-bind:todos="todos" />
  </div>
</template>

<script>
import Todos from "./components/Todos";

export default {
  name: "App",
  components: {
    Todos
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "todo 1",
          completed: true
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
  margin-top: 60px;
}
</style>
