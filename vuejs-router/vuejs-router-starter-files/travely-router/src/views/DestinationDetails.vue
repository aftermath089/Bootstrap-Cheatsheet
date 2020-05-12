<template>
  <div>
      <GoBack/>
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

    
    <section class="experiences">
      <h2>Top experiences in {{computedDestination.name}}</h2>
      <div class="cards">
          <div class="card" v-for="experience in computedDestination.experiences" v-bind:key="experience.slug">
            <router-link v-bind:to="{name: 'ExperienceDetails', params:{destinationExperienceSlug: experience.slug }}">
              <img v-bind:src="require(`@/assets/${experience.image}`)" alt="experience.name"/>
              <span class="card_text">
                  {{experience.name}}
              </span>
            </router-link>
          </div>
      </div>
      <router-view v-bind:key="$route.path"/>
    </section>
  </div>
</template>

<script>
import store from "@/store.js";
import GoBack from "@/components/GoBack.vue"

export default {
  data() {
    return {};
  },
  components:{
      GoBack
  },
  props: {
    destinationSlug: {
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

<style scoped>
img {
  max-width: 600px;
  height: auto;
  width: 100%;
  max-height: 400px;
}
.destination-details {
  display: flex;
  justify-content: space-between;
}
p {
  margin: 0 40px;
  font-size: 20px;
  text-align: left;
}
.cards {
  display: flex;
}
.cards img {
  max-height: 200px;
}
.card {
  padding: 0 20px;
  position: relative;
}
.card__text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 25px;
  font-weight: bold;
  text-decoration: none;
}
</style>