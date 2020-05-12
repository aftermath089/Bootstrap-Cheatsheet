import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

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
    ]
  },
  {// make sure this is always at the end of router array
    path : "*",
    name : "NotFound",
    component:  () => import(/* webpackChunkName: "NotFound"*/ "../components/NotFound.vue")
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
