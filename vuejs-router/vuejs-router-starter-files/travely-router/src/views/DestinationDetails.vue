<template>
  <section class="destination">
    <h1>{{computedDestination.name}}</h1>
    <div class="destination-details">
      <img
        v-bind:src="require(`@/assets/${computedDestination.image}`)"
        v-bind:alt="computedDestination.name"
      />
      <p>{{computedDestination.description}}</p>
    </div>
  </section>
</template>

<script>
import store from "@/store.js";

export default {
  data() {
    return {};
  },
  props:{
    destinationSlug:{
        type: String,
        required: true
    }
  },
  computed: {
    computedDestination() {
      return store.destinations.find(
        destination => destination.slug === this.destinationSlug
      );
    }
  }
};
</script>
