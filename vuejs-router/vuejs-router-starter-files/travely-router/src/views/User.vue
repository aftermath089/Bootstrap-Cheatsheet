<template>
  <div>
      <h1>{{user}}</h1>
      <router-link v-bind:to="{name: 'Invoices'}">Invoices</router-link>
      <button class="btn" v-on:click="logOut">logout</button>
  </div>
</template>

<script>
import store from "@/store.js"

export default {
    data(){
        return{
            user : store.user
        }
    },
    methods:{
        logOut(){
            store.user = null;
            this.$router.push('/')
        }
    }
}
</script>

<style>

</style>