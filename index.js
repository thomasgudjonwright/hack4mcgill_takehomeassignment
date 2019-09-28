import Vue from "vue";
import Router from "vue-router";
import Home from "@/components/Home";
import Counter from "@/components/Counter";
import Show from "@/components/Show";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Counter/",
      name: "Counter",
      component: Counter
    },
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/Show/",
      name: "Show",
      component: Show
    }
  ] 
  }) ;
