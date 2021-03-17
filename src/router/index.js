import { createRouter, createWebHistory } from 'vue-router';
import Home from "../views/Home.vue";
import Todo from "../views/Todo.vue";
import Quote from "../views/Quote.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/todo",
    name: "Todo",
    component: Todo
  }
  ,
  {
    path: "/quote",
    name: "Quote",
    component: Quote
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
