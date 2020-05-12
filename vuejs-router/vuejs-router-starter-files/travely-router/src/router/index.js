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
  {
    path : "/user",
    name : "User",
    component : () => import(/* webpackChunkName: "User"*/ "../views/User.vue"),
    meta: {requireAuth:true}
  },
  {
    path : "/login",
    name : "Login",
    component : () => import(/* webpackChunkName: "Login"*/ "../views/Login.vue")
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
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      const position = {}
      if(to.hash){
        position.selector = to.hash
        if(to.hash === '#experience'){ // if the hashtag we goin' to is in the same positin as id experience
          position.offset = {y:140} // offset the id experience 140px from top
        }
        if(document.querySelector(to.hash)){
          return position
        }
        return false
      }
    }
  }
});

router.beforeEach(
  (to, from, next) => {
    if(to.matched.some(record => record.meta.requireAuth)){ //if the user is one of the record
      if(!store.user){ //if user not in db
        next({name: 'Login'})
      }else{
        next()
      }
    }else{
      next()
    }
  }
)

export default router;
