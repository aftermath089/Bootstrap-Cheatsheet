<template>
  <div>
      <h1>Product List</h1>
      <p v-if="loading">Loading</p>
      <ul v-else>
          <li v-for="product in products" v-bind:key="product.id">{{product.title}} | {{product.price}}
              <button v-on:click='addProductToCart(product)'>add to cart</button>
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
            return this.$store.getters.availableProducts
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