<template>
  <section>
      <h1>Experiences</h1>
      <h2>{{computedExperience.name}}</h2>
      <div class="experience-details">
          <img v-bind:src="require(`@/assets/${computedExperience.image}`)" alt="computedExperience.name">
          <p>{{computedExperience.description}}</p>
      </div>
  </section>
</template>

<script>
import store from '@/store.js'

export default {
    props:{
        destinationSlug:{
            type: String,
            required: true
        },
        destinationExperienceSlug:{
            type: String,
            required: true
        }
    },
    computed:{
        computedDestination(){
            return store.destinations.find(
                destination => destination.slug === this.destinationSlug
            )
        },
        computedExperience(){
            return this.computedDestination.experiences.find(
                experience => experience.slug === this.destinationExperienceSlug
            )
        }
    }
}
</script>

<style>

</style>