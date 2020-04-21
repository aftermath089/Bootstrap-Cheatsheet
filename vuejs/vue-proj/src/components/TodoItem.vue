<template>
  <div class="todo-item" v-bind:class="{'is-complete': todo.completed}">
    <p>
      <input type="checkbox" v-on:change="markComplete" />
      {{todo.title}}
      <button class="btn-del" v-on:click="$emit('del-todo', todo.id)">x</button>
    </p>
  </div>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  methods: {
    markComplete() {
      this.todo.completed = !this.todo.completed;
    }
  }
};
</script>

<style scoped>
.todo-item {
  background: white;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
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