<template>
  <div>
      <h1>Product List</h1>
      <ul>
          <li v-for="product in products" v-bind:key="product.id">{{product.title}} | {{product.price}}</li>
      </ul>
  </div>
</template>

<script>

import store from '@/store'

export default {
    computed: {
        products(){
            return store.getters.availableProducts
        }
    },
    
}
</script>

<style>

</style>