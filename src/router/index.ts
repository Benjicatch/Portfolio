import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectsView from "@/views/ProjectsView.vue";
import AcademyView from "@/views/AcademyView.vue";

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/about-me", name: "about", component: AboutView },
    { path: "/projects", name: "projects", component: ProjectsView },
    { path: "/studies", name: "studies", component: AcademyView },
  ],
});

export default router;
