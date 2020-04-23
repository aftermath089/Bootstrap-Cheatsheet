<template>
  <div>
      Filter Todo
      <select v-on:change="filterTodos($event.target.value)">
          <option value="200">200</option>
          <option value="160">160</option>
          <option value="80">80</option>
          <option value="40">40</option>
          <option value="20">20</option>
          <option value="10">10</option>
          <option value="5">5</option>

      </select>
  </div>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name : 'FilterTodos',
    methods : {
        ...mapActions(['filterTodos'])
    }
}
</script>

<style scoped>
    select{
        margin-top: 20px;
        padding: 6px;
        border: lightblue 1px solid;
    }
</style>