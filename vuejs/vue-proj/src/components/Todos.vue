<template>
  <div>
    <h1>Todos</h1>
    <div v-for="todo in todos" v-bind:key="todo.id">
      <h3>{{todo.title}}</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todos",
  props: ["todos"]
};
</script>

<style scoped>
</style>>

