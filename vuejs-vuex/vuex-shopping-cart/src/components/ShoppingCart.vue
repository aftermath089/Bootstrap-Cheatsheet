<template>
  <div>
    <h1>Shopping Cart:</h1>
    <ul>
      <li
        v-for="cartItem in cartItems"
        v-bind:key="cartItem.title"
      >{{cartItem.title}} - {{cartItem.price}} - {{cartItem.quantity}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.itemsInCart;
    }
  }
};
</script>

<style>
</style>