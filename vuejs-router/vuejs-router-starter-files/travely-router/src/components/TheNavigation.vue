<template>
  <nav id="nav">
    <ul class="nav-links">
        <li class="links">
            <router-link to="/">Home</router-link>
        </li>
        <li v-for="destination in destinations" v-bind:key="destination.id" class="links">
            <router-link v-bind:to="{
                name: 'DestinationDetails',
                params :{
                    destinationSlug:destination.slug
                }
            }">{{destination.name}}</router-link>
        </li>
        <li class="links">
            <router-link to="/user">Dashboard</router-link>
        </li>
    </ul>
  </nav>
</template>

<script>
import store from '@/store.js'

export default {
    data(){
        return {
            destinationId : this.$route.params.id,
            destinations : store.destinations   
        }
    }
};
</script>

<style scoped>
#nav {
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
}
</style>