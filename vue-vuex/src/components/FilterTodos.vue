<template>
  <div>
      Filter Todo
      <select>
          <option value="200">200</option>
          <option value="200">160</option>
          <option value="200">80</option>
          <option value="200">40</option>
          <option value="200">20</option>
          <option value="200">10</option>
          <option value="200">5</option>

      </select>
  </div>
</template>

<script>
export default {
    name : 'FilterTodos'
}
</script>

<style scoped>
    select{
        margin-top: 20px;
        padding: 6px;
        border: lightblue 1px solid;
    }
</style>