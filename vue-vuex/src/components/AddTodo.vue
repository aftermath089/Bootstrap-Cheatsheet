<template>
  <div>
    <h3>add todo</h3>
    <div class="add">
      <form v-on:submit="onSubmit">
        <input type="text" v-model="title" placeholder="Add todos ....">
        <input type="submit" value="submit">
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions} from 'vuex'

export default {
  name: 'AddTodo',
  data(){
    return{
      title : ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    onSubmit(e){
      e.preventDefault()
      this.addTodo(this.title)
      console.log(this.title)
    }
  }
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