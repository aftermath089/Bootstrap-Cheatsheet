<template>
  <div>
    <h3>add todo</h3>
    <div class="add">
      <form action="">
        <input type="text" v-model="title" placeholder="Add todos ....">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AddTodo'
}
</script>

<style scoped>
  form{
    display: flex;
  }

  input[type="text"]{
    flex: 10;
    padding: 10px;
    border: 1px solid lightblue;
    outline: 0;
  }

  input[type="submit"]{
    flex: 2;
    background: lightgreen;
    color: white;
    border: 1px lightgreen solid;
    cursor: pointer;
  }
  
  input[type="submit"]:hover{
    background: darkcyan;
  }
</style>