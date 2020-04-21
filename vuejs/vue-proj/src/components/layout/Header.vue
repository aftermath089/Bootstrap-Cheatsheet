<template>
  <header class="header">
    <h1>TodoList</h1>
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  background: grey;
  color: white;
  text-align: center;
  padding: 10px;
}

.header a {
    padding: 0;
}
</style>