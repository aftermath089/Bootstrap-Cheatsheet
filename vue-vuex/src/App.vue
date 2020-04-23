<template>
  <div id="app">
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";

export default {
  name: "App",
  components: {
    Todos
  }
};
</script>

<style>
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
  background: white;
}

.container {
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
