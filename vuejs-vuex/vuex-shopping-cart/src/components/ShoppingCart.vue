<template>
  <div>
    <h1>Shopping Cart:</h1>
    <ul>
      <li
        v-for="cartItem in cartItems"
        v-bind:key="cartItem.title"
      >{{cartItem.title}} - {{cartItem.price}} - {{cartItem.quantity}}</li>
    </ul>
    <div>Total Price : {{totalPrice}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItems() {
      return this.$store.getters.itemsInCart;
    },
    totalPrice(){
      return this.$store.getters.cartTotal;
    }
  }
};
</script>

<style>
</style>