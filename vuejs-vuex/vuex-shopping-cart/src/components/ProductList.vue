<template>
  <div>
      <h1>Product List</h1>
      <ul>
          <li v-for="product in products" v-bind:key="product.id">{{product.title}} | {{product.price}}</li>
      </ul>
  </div>
</template>

<script>
import shop from '@/api/shop.js'
import store from '@/store'

export default {
    computed: {
        products(){
            return store.getters.availableProducts
        }
    },
    
    created(){
        shop.getProducts(products => { //get the products from shop and  update with store.commit (note:shop is api and store is vuex storage)
            store.commit('setProducts', products)
        })    
    }
}
</script>

<style>

</style>