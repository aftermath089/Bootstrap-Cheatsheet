<template>
  <div>
      <h1>Product List</h1>
      <p v-if="loading">Loading</p>
      <ul v-else>
          <li v-for="product in products" v-bind:key="product.id">
             <div>{{product.title}}</div>
              <div>$ {{product.price}}</div>
              <div>Qty: {{product.inventory}}</div>
              <button v-on:click='addProductToCart(product)' v-bind:disabled="!productIsInStock(product)">add to cart</button>
              <br>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{
            loading : false
        }
    },
    computed: {
        products(){
            return this.$store.state.products
        },
        productIsInStock(){
            return this.$store.getters.productIsInStock
        }
    },
    methods: {
        addProductToCart(product){
            this.$store.dispatch('addProductToCart', product)
        }
    },
    created(){
        this.loading = true
        this.$store.dispatch('fetchProducts') //this to call the function
            .then(() => this.loading = false) //set to false after promise resolved
    }
}
</script>

<style>

</style>