<template>
  <div class="home">
    <h1>All Destination</h1>
    <div class="destination">
      <div v-for="destination in destinations" v-bind:key="destination.name">
        <router-link v-bind:to="destination.slug">
          <h2>{{destination.name}}</h2>
        </router-link>
        <figure>
          <router-link v-bind:to="destination.name">
            <img
              v-bind:src="require(`@/assets/${destination.image}`)"
              v-bind:alt="destination.name"
            />
          </router-link>
        </figure>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
  name: "Home",
  components: {},
  data() {
    return {
      destinations: store.destinations
    };
  }
};
</script>

<style scoped>
#home{
  margin: auto;
}

.destination{
  display: flex;
  justify-content: space-between;
}

img{
  max-width: 200px;
}
</style>