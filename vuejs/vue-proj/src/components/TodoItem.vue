<template>
  <div class="todo-item">
      <p>{{todo.title}}</p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"]
};
</script>

<style scoped>
.todo-item {
  background: white;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoratiom: line-through;
}

.btn-del {
  background: red;
  color: white;
  padding: 5px 10px;
  border-radius: 50%;
  cursor: pointer;
  float: right;
}
</style>