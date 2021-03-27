import vue from 'vue';
import Router from 'vue-router';


import Home from "@/views/Home";
import Cursos from "@/views/Cursos";
import CourseDetail from "@/views/CourseDetail";

vue.use(Router)

export default new Router({
    mode: "history",

  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },

    {
      path: "/cursos",
      name: "cursos",
      component: Cursos
    }
    ,

    {
      path: "/curso/:id",
      name: "course-detail",
      component: CourseDetail
    }
  ]

})