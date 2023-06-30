import { createRouter, createWebHistory } from "vue-router";
import TheHome from "./views/TheHome.vue";
import TodoList from "./views/TodoList.vue";

const routes = [
  { path: "/", component: TheHome },
  { path: "/todolist", component: TodoList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
