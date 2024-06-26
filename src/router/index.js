import { createRouter, createWebHistory } from "vue-router";
import LandingPage from "../views/LandingPageView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "LandingPage",
      component: LandingPage,
    },
    {
      path: "/home/",
      name: "home",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/HomeView.vue"),
    },
    {
      path: "/admin/login",
      name: "login",
      component: () => import("../views/LogInView.vue"),
    },
    {
      path: "/admin/",
      name: "admin",
      component: () => import("../views/AdminControlsView.vue"),
    },
    {
      path: "/courses/",
      name: "courses",
      component: () => import("../views/CourseViews/CourseView.vue"),
    },
    {
      path: "/courses/:moduleProp",
      name: "module",
      component: import("../views/CourseViews/ModuleView.vue"),
      props: true,
    },
    {
      path: "/courses/:moduleProp/:unitProp/:lessonProp",
      name: "lesson",
      component: () => import("../views/CourseViews/LessonView.vue"),
      props: true,
    },
    {
      path: "/courses/:moduleProp/:unitProp",
      name: "unit",
      component: () => import("../views/CourseViews/UnitView.vue"),
      props: true,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;
