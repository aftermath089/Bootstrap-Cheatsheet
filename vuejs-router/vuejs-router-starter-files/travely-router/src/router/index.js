import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/store.js"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/details/:destinationSlug", //bring the slug in params as url
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "DestinationDetails"*/ "../views/DestinationDetails.vue"),
    children:[
      {
        path: ":destinationExperienceSlug",
        name: "ExperienceDetails",
        props: true,
        component: () => import(/* webpackChunkName: "DestinationExperienceDetails"*/ "../views/ExperienceDetails.vue")
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.destinationSlug
      );
      if (exists) {
        next();
      } else {
        next({ name: "NotFound" });
      }
    }

  },
  {// make sure this is always at the end of router array
    path : "/404",
    alias: "*",
    name : "NotFound",
    component:  () => import(/* webpackChunkName: "NotFound"*/ "../views/NotFound.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
